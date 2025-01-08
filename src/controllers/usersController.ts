import { getUsers } from "@services/userService"
import { Request, Response } from "express"

export async function getAllUsers(_: Request, res: Response) {
    try {
        const users = await getUsers()
        res.status(200).json({ users: users })
    } catch (error:any) {
        res.status(500).json({ message: error.message })
    }
}
