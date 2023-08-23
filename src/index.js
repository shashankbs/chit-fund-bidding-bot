const { Client } = require("whatsapp-web.js");
const qrCode = require("qrcode-terminal");

const client = new Client();

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
