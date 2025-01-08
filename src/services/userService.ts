import { prisma } from "@configs/db";
import { User } from "@prisma/client";

export async function getUserFromId(id: number) {
    const user: User | null = await prisma.user.findUnique({
        where: {
            id: id
        }
    })
    return user
}

export async function getUser(input: string) {
    const isEmail = input.includes('@')

    let user: User | null

    if (isEmail) {
        user = await prisma.user.findUnique({
            where: {
                email: input
            }
        })
    } else {
        user = await prisma.user.findUnique({
            where: {
                username: input
            }
        })
    }
    return user
}

export async function getUsers() {
    const allUsers: User[] = await prisma.user.findMany()
    return allUsers
}
