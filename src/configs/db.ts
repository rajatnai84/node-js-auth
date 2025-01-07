import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
    datasources: {
        db: {
            url: process.env.DATABASE_URL
        }
    }
});

export const testPrisma = new PrismaClient({
    datasources: {
        db: {
            url: process.env.DATABASE_TEST_URL
        }
    }
})