import { createUser, getUsers } from "@services/UserServices";
import { Request, Response } from "express";

export async function signup(req: Request, res: Response) {
    try {
        const { email } = req.body
        const result = await createUser(email)
        res.status(200).json({result: result})
    } catch (error) {
        res.status(500).json({ message: "Error in creation" })
    }
}

export async function getAllUser(req: Request, res: Response) {
    try {
        const users = await getUsers()
        res.status(200).json({users: users})
    } catch (error) {
        res.status(500).json({ message: "Error in fetching" })
    }
}
