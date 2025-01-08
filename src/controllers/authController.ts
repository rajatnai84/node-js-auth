import { createUser } from "@services/authService";
import { Request, Response } from "express";
import { sendErrorResponse } from "@helpers/sendErrorResponses";
import { authenticateUser } from "@helpers/authenticateUser";
import { validateRequest } from "@helpers/validateRequest";
import { hashPassword } from "@utils/passwordUtils";

export async function register(req: Request, res: Response) {
    const validataionErrors = validateRequest(req);
    if (!validataionErrors) {
        sendErrorResponse(res, 400, validataionErrors);
        return;
    }
    try {
        const hashedPassword = await hashPassword(req.body.password);
        const userData = {
            ...req.body,
            password: hashedPassword
        }
        const user: any = await createUser(userData)
        res.status(201).json({
            id: user.id,
            username: user.username,
            name: user.name,
            email: user.email
        })
    } catch{
        sendErrorResponse(res, 500, 'Internal server error');
        return
    }
}

export async function login(req: Request, res: Response) {
    const validataionErrors = validateRequest(req);
    if (!validataionErrors) {
        sendErrorResponse(res, 400, validataionErrors);
        return;
    }
    try {
        const token = await authenticateUser(req.body.username, req.body.password)
        if (!token) {
            sendErrorResponse(res, 401, 'Invalid credentials or user not found');
            return
        }
        res.status(200).json({ token })
    } catch {
        sendErrorResponse(res, 500, 'Internal server error');
        return
    }
}

