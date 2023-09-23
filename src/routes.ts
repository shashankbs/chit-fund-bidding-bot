import { Express } from "express";
import { HealthHandler } from "./handlers/health.handler";
import { NewMemberHandler } from "./handlers/newMember.handler";

export const routes = (app: Express) => {
  app.get("/health", HealthHandler());
  app.post("/newMember", NewMemberHandler());
};
