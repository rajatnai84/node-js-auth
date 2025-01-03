import { User } from "@custom-types/db";
import { prisma } from "../configs/db";

export async function createUser(user: User) {
    if (user.email && user.name && user.password && user.username) {
        const data: User = await prisma.user.create({
            data: {
                email: user.email,
                name: user.name,
                username: user.username,
                password: user.password,
            }
        })
        return data
    }
}

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
