import { RequestHandler, Request, Response } from "express";

export const HealthHandler = (): RequestHandler => {
  return async (req: Request, res: Response) => {
    return res.send("OK");
  };
};
