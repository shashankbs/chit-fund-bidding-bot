import { Client } from "whatsapp-web.js";
import qrCode from "qrcode-terminal";
import { newMessageHandler } from "./handlers/newMessage.handler";

const client: Client = new Client({});

client.on("qr", (qr) => {
  qrCode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client is ready");
});

newMessageHandler(client);

client.initialize();
