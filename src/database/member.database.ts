import { prisma } from "../services/prisma";
import { Member } from "@prisma/client";

export const createNewMember = async (data: Omit<Member, "MemberID">) => {
  return await prisma().member.create({
    data: {
      FirstName: data.FirstName,
      LastName: data.LastName,
      Phone: data.Phone,
      Address: data.Address,
    },
  });
};
