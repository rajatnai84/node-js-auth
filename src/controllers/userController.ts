import { createUser, getUser, getUsers } from "@services/userService";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { generateToken } from "@utils/jwt";
import { validationResult } from "express-validator";

export async function register(req: Request, res: Response) {
    const errorResult = validationResult(req);
    if (errorResult.isEmpty()) {
        try {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            const userData = {
                ...req.body,
                password: hashedPassword
            }
            const result = await createUser(userData)
            res.status(200).json({ result: result })
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    } else {
        res.status(400).json({ errors: errorResult.array() });
    }
}

export async function login(req: Request, res: Response) {
    const errorResult = validationResult(req);
    if (errorResult.isEmpty()) {
        try {
            const user = await getUser(req.body.username)
            const isMatched = await bcrypt.compare(req.body.password, user.password)
            if (isMatched) {
                const token = generateToken(user)
                res.status(200).json({
                    token,
                    id: user.id,
                    username: user.username,
                    email: user.email
                })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error.message })
        }
    }
    else {
        res.status(400).json({ errors: errorResult.array() });
    }
}

export async function getAllUser(req: Request, res: Response) {
    try {
        const users = await getUsers()
        res.status(200).json({ users: users })
    } catch (error) {
        res.status(500).json({ message: "Error in fetching" })
    }
}
