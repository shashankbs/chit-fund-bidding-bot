import { createExpressServer } from "./server";
import { setUpWhatsAppClient } from "./whatsapp";
import "dotenv/config";

setUpWhatsAppClient();
const app = createExpressServer();

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
