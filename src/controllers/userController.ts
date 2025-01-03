import { createUser, getUser, getUsers } from "@services/userService";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { generateToken } from "@utils/jwt";
import { validationResult } from "express-validator";
import { User } from "@custom-types/db";

export async function register(req: Request, res: Response) {
    const errorResult = validationResult(req);
    if (errorResult.isEmpty()) {
        try {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            const userData = {
                ...req.body,
                password: hashedPassword
            }
            const user:any = await createUser(userData)
            res.status(201).json({
                id: user.id,
                username: user.username,
                name: user.name,
                email: user.email
            })
        } catch (error: any) {
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
            const user: User | null = await getUser(req.body.username)
            if (user && user.password) {
                const isMatched = await bcrypt.compare(req.body.password, user.password)
                if (isMatched) {
                    const token = generateToken(user)
                    res.status(200).json({
                        token,
                        id: user.id,
                        username: user.username,
                        name: user.name,
                        email: user.email
                    })
                }
            }
        } catch (error: any) {
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
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
}
