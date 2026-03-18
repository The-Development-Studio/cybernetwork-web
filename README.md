
  # Cyber Network Website Design

  This is a code bundle for Cyber Network Website Design. The original project is available at https://www.figma.com/design/vQnXonNYIrAmMJK0XONKBA/Cyber-Network-Website-Design.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the frontend development server.

  ## Contact Backend

  The contact form now sends data to a Node backend at `/api/contact`.

  1. Copy `.env.example` to `.env`
  2. Fill in your SMTP credentials and keep `MAIL_TO=raghul@cybernetworkco.com`
  3. Run `npm run dev:server`
  4. In another terminal, run `npm run dev:client`

  In production, run `npm run build` for the frontend and `npm start` for the backend.
  
