import { prisma } from "../services/prisma";
import { ChitFund_Members } from "@prisma/client";

export const createNewChitFundMembers = async (data: ChitFund_Members) => {
  return await prisma().chitFund_Members.create({
    data: {
      ChitFundID: data.ChitFundID,
      MemberID: data.MemberID,
    },
  });
};
