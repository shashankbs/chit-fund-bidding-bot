import { prisma } from "../services/prisma";
import { ChitFund } from "@prisma/client";

export const createNewChitFund = async (data: Omit<ChitFund, "ChitFundID">) => {
  return await prisma().chitFund.create({
    data: {
      StartDate: data.StartDate,
      EndDate: data.EndDate,
      ChitsCompleted: 0,
      BalanceAmount: data.BalanceAmount,
      MemberCount: data.MemberCount,
    },
  });
};
