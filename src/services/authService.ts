import { prisma } from "@configs/db";
import { User } from "@prisma/client";

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