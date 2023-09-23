import { Request, RequestHandler, Response } from "express";
import { createNewMember } from "../database/member.database";
import { Member } from "@prisma/client";

export const NewMemberHandler = (): RequestHandler => {
  return async (req: Request, res: Response) => {
    try {
      const data: Omit<Member, "MemberID"> = req.body;
      const newMember = await createNewMember(data);
      console.log("Created new member", newMember);
      res.status(200).send("New member created");
    } catch (err: any) {
      console.error(err.msg);
      res.status(err.response.status).send("An error occured");
    }
  };
};
