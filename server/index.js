const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');
const nodemailer = require('nodemailer');

loadEnvFile();

const port = Number(process.env.PORT || 3001);
const mailTo = process.env.MAIL_TO || 'raghul@cybernetworkco.com';
const allowedOrigins = getAllowedOrigins(process.env.CORS_ORIGIN);
const rateLimitWindowMs = Number(process.env.CONTACT_RATE_LIMIT_MS || 30000);
const maxBodySizeBytes = 20 * 1024;
const rateLimitByIp = new Map();

const transporter = createTransporter();

const server = http.createServer(async (req, res) => {
  const origin = req.headers.origin;

  if (req.method === 'OPTIONS') {
    sendJson(res, 204, {}, origin);
    return;
  }

  if (req.method === 'GET' && req.url === '/api/health') {
    sendJson(res, 200, { ok: true }, origin);
    return;
  }

  if (req.method === 'POST' && req.url === '/api/contact') {
    try {
      const body = await readJsonBody(req, maxBodySizeBytes);
      const validation = validateContactPayload(body);

      if (!validation.ok) {
        sendJson(res, 400, { success: false, message: validation.message }, origin);
        return;
      }

      if (validation.data.honeypot !== '') {
        // Pretend success for bots and drop the submission.
        sendJson(res, 200, { success: true }, origin);
        return;
      }

      const clientIp = getClientIp(req);
      cleanupRateLimitEntries();

      const previousAttemptAt = rateLimitByIp.get(clientIp) || 0;
      const elapsed = Date.now() - previousAttemptAt;
      if (elapsed < rateLimitWindowMs) {
        const remainingSeconds = Math.ceil((rateLimitWindowMs - elapsed) / 1000);
        sendJson(
          res,
          429,
          {
            success: false,
            message: `Please wait ${remainingSeconds} seconds before submitting another enquiry.`,
          },
          origin,
        );
        return;
      }

      if (!transporter) {
        sendJson(
          res,
          500,
          {
            success: false,
            message: 'Email server is not configured yet. Please set the SMTP environment variables.',
          },
          origin,
        );
        return;
      }

      await transporter.sendMail({
        from: process.env.MAIL_FROM || process.env.SMTP_USER,
        to: mailTo,
        replyTo: validation.data.email,
        subject: `New Cyber Network enquiry from ${validation.data.name}`,
        text: buildTextEmail(validation.data),
        html: buildHtmlEmail(validation.data),
      });

      rateLimitByIp.set(clientIp, Date.now());
      sendJson(res, 200, { success: true }, origin);
      return;
    } catch (error) {
      const statusCode = error && error.statusCode ? error.statusCode : 500;
      const message =
        error && error.publicMessage
          ? error.publicMessage
          : 'We could not send your enquiry right now. Please try again later.';

      sendJson(res, statusCode, { success: false, message }, origin);
      return;
    }
  }

  sendJson(res, 404, { success: false, message: 'Not found' }, origin);
});

server.listen(port, () => {
  console.log(`Contact backend listening on http://localhost:${port}`);
});

function loadEnvFile() {
  const envFilePath = path.join(process.cwd(), '.env');
  if (!fs.existsSync(envFilePath)) {
    return;
  }

  const fileContents = fs.readFileSync(envFilePath, 'utf8');
  for (const line of fileContents.split(/\r?\n/)) {
    const trimmedLine = line.trim();
    if (!trimmedLine || trimmedLine.startsWith('#')) {
      continue;
    }

    const separatorIndex = trimmedLine.indexOf('=');
    if (separatorIndex === -1) {
      continue;
    }

    const key = trimmedLine.slice(0, separatorIndex).trim();
    if (!key || process.env[key] !== undefined) {
      continue;
    }

    let value = trimmedLine.slice(separatorIndex + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    process.env[key] = value;
  }
}

function createTransporter() {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || 587);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const mailFrom = process.env.MAIL_FROM || smtpUser;

  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !mailFrom) {
    return null;
  }

  return nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });
}

function getAllowedOrigins(configuredOrigins) {
  if (!configuredOrigins) {
    return new Set([
      'http://localhost:3000',
      'https://cybernetworkco.com',
      'https://www.cybernetworkco.com',
    ]);
  }

  return new Set(
    configuredOrigins
      .split(',')
      .map((origin) => origin.trim())
      .filter(Boolean),
  );
}

function readJsonBody(req, maxBytes) {
  return new Promise((resolve, reject) => {
    let body = '';
    let receivedBytes = 0;
    let alreadyRejected = false;

    req.on('data', (chunk) => {
      if (alreadyRejected) {
        return;
      }

      receivedBytes += chunk.length;
      if (receivedBytes > maxBytes) {
        alreadyRejected = true;
        req.pause();
        rejectWith(
          reject,
          413,
          'Submission too large. Please shorten your message and try again.',
        );
        return;
      }

      body += chunk.toString();
    });

    req.on('end', () => {
      if (alreadyRejected) {
        return;
      }

      if (!body) {
        resolve({});
        return;
      }

      try {
        resolve(JSON.parse(body));
      } catch {
        rejectWith(reject, 400, 'Invalid request payload.');
      }
    });

    req.on('error', () => {
      if (alreadyRejected) {
        return;
      }

      rejectWith(reject, 500, 'Unable to read the request body.');
    });
  });
}

function validateContactPayload(payload) {
  const data = {
    name: sanitizeInput(payload.name),
    email: sanitizeInput(payload.email),
    phone: sanitizeInput(payload.phone),
    serviceType: sanitizeInput(payload.serviceType),
    message: sanitizeInput(payload.message),
    honeypot: sanitizeInput(payload.honeypot),
  };

  if (!data.name || data.name.length > 100) {
    return { ok: false, message: 'Please enter a valid full name.' };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) || data.email.length > 100) {
    return { ok: false, message: 'Please enter a valid email address.' };
  }

  if (data.phone && (!/^[+]?[0-9\s\-()]+$/.test(data.phone) || data.phone.length > 20)) {
    return { ok: false, message: 'Please enter a valid phone number.' };
  }

  if (!data.serviceType || data.serviceType.length > 100) {
    return { ok: false, message: 'Please select a service type.' };
  }

  if (!data.message || data.message.length < 10 || data.message.length > 1000) {
    return { ok: false, message: 'Please enter an enquiry between 10 and 1000 characters.' };
  }

  return { ok: true, data };
}

function sanitizeInput(value) {
  return String(value || '')
    .replace(/[<>]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+=/gi, '')
    .trim();
}

function buildTextEmail(data) {
  return [
    'New Cyber Network enquiry',
    '',
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || 'Not provided'}`,
    `Service Type: ${data.serviceType}`,
    '',
    'Message:',
    data.message,
  ].join('\n');
}

function buildHtmlEmail(data) {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
      <h2 style="margin-bottom: 16px;">New Cyber Network enquiry</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 640px;">
        <tr>
          <td style="padding: 8px; border: 1px solid #d1d5db; font-weight: 700;">Name</td>
          <td style="padding: 8px; border: 1px solid #d1d5db;">${escapeHtml(data.name)}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #d1d5db; font-weight: 700;">Email</td>
          <td style="padding: 8px; border: 1px solid #d1d5db;">${escapeHtml(data.email)}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #d1d5db; font-weight: 700;">Phone</td>
          <td style="padding: 8px; border: 1px solid #d1d5db;">${escapeHtml(data.phone || 'Not provided')}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #d1d5db; font-weight: 700;">Service Type</td>
          <td style="padding: 8px; border: 1px solid #d1d5db;">${escapeHtml(data.serviceType)}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #d1d5db; font-weight: 700;">Message</td>
          <td style="padding: 8px; border: 1px solid #d1d5db; white-space: pre-wrap;">${escapeHtml(data.message)}</td>
        </tr>
      </table>
    </div>
  `;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function getClientIp(req) {
  const forwardedFor = req.headers['x-forwarded-for'];
  if (typeof forwardedFor === 'string' && forwardedFor.length > 0) {
    return forwardedFor.split(',')[0].trim();
  }

  return req.socket.remoteAddress || 'unknown';
}

function cleanupRateLimitEntries() {
  const cutoff = Date.now() - rateLimitWindowMs;
  for (const [ipAddress, timestamp] of rateLimitByIp.entries()) {
    if (timestamp < cutoff) {
      rateLimitByIp.delete(ipAddress);
    }
  }
}

function sendJson(res, statusCode, payload, origin) {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (!origin) {
    headers['Access-Control-Allow-Origin'] = '*';
  } else if (allowedOrigins.has(origin)) {
    headers['Access-Control-Allow-Origin'] = origin;
    headers.Vary = 'Origin';
  }

  res.writeHead(statusCode, headers);
  res.end(statusCode === 204 ? undefined : JSON.stringify(payload));
}

function rejectWith(reject, statusCode, publicMessage) {
  const error = new Error(publicMessage);
  error.statusCode = statusCode;
  error.publicMessage = publicMessage;
  reject(error);
}
