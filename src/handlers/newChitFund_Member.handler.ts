import { ChitFund_Members } from "@prisma/client";
import { Request, RequestHandler, Response } from "express";
import { createNewChitFundMembers } from "../database/chitFund_Members";

export const NewChitFundHandler = (): RequestHandler => {
  return async (req: Request, res: Response) => {
    try {
      const data: ChitFund_Members = req.body;
      const newChitFund = await createNewChitFundMembers(data);
      console.log("Created new chit fund member mapping", newChitFund);
      res.status(200).send("New chit member mapping created");
    } catch (err: any) {
      console.error(err.msg);
      res.status(err.response.status).send("An error occured");
    }
  };
};
