import { ChitFund } from "@prisma/client";
import { Request, RequestHandler, Response } from "express";
import { createNewChitFund } from "../database/chitFund.database";

export const NewChitFundHandler = (): RequestHandler => {
  return async (req: Request, res: Response) => {
    try {
      const data: Omit<ChitFund, "ChitFUndID"> = req.body;
      const newChitFund = await createNewChitFund(data);
      console.log("Created new chit fund", newChitFund);
      res.status(200).send("New chit fund created");
    } catch (err: any) {
      console.error(err.msg);
      res.status(err.response.status).send("An error occured");
    }
  };
};
