import { PrismaClient } from "@prisma/client";

export const prisma = () => {
  return new PrismaClient();
};
