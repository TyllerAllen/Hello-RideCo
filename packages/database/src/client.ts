import { PrismaClient } from "../generated/client/client";

const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient(); // exports instance of prisma

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export * from "../generated/client/client"; // exports generated types from prisma
