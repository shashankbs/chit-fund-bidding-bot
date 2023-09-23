import { Client } from "whatsapp-web.js";
import qrCode from "qrcode-terminal";
import { newMessageHandler } from "./handlers/newMessage.handler";

export const setUpWhatsAppClient = async () => {
  const client: Client = new Client({});

  // Generate the QR to enable user login
  await client.on("qr", (qr) => {
    qrCode.generate(qr, { small: true });
  });

  // Handle the operations once the session is active
  await client.on("ready", () => {
    console.log("Client is ready");
  });

  newMessageHandler(client);

  client.initialize();
};
