import { PrismaClient } from "@prisma/client";
import { prisma } from "../configs/db";

export async function createUser (email:string){
    const data = await prisma.user.create({
        data: {
            email: email,
            password: '123123123',
        }
    })
    return data
}

export async function getUsers() {
    const all = await prisma.user.findMany()
    return all
}
