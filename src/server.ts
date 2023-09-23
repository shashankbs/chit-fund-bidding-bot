import express from "express";
import { routes } from "./routes";

const app = express();

export const createExpressServer = () => {
  app.use(express.json());
  routes(app);
  return app;
};
