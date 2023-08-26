import { Client } from "whatsapp-web.js";
import qrCode from "qrcode-terminal";

const client: Client = new Client({});

client.on("qr", (qr) => {
  qrCode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client is ready");
});

client.on("message", (message) => {
  console.log(message);
});

client.initialize();
