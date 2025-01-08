import { Request } from "express";
import { validationResult } from "express-validator";

export function validateRequest(req: Request): string[] {
    const errors = validationResult(req);
    return errors.isEmpty() ? [] : errors.array().map((error) => error.msg)
}