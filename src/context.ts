import { PrismaClient } from "@prisma/client";
import { decodeAuthHeader } from "./utils/auth";
import { Request } from "express";
export const prisma = new PrismaClient();

export interface Context {
    prisma: PrismaClient;
    userId?: number;
}

export const context = ({ req }: { req: Request; }): Context => {
    const token = req && req.get('Authorization') ? decodeAuthHeader(req.get('Authorization')!) : null;
    return {
        prisma,
        userId: token?.userId
    };
};