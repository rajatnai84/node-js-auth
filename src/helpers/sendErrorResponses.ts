import { Response } from "express";

export function sendErrorResponse(res: Response, status: number, message: string | string[]): void {
    res.status(status).json({ error: message });
}
