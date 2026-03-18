const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 587,
  secure: false,
  auth: {
    user: "info@cybernetworkco.com",
    pass: "YOUR_ZOHO_APP_PASSWORD"
  }
});

async function sendTest() {
  try {
    await transporter.sendMail({
      from: "info@cybernetworkco.com",
      to: "raghul@cybernetworkco.com",
      subject: "SMTP Test",
      text: "Zoho SMTP is working correctly."
    });

    console.log("Email sent successfully!");
  } catch (error) {
    console.error("SMTP Error:", error);
  }
}

sendTest();