import { getUserFromId } from "@services/userService";
import { isTokenValid } from "@utils/jwt";
import { Request, Response } from "express";

export const isAuthenticated = async (req:Request, res:Response, next:any) : Promise<any> =>  {
    try {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.slice(7)

        if (token == null || !token) {
            return res.status(401).json({
                success: false,
                message: "User is not logged in!"
            })
        }
        else {
            await isTokenValid(token)
            const id: number | null = await isTokenValid(token)
            if (id) {
                await getUserFromId(id);
            }
        }
        next()
    } catch (error: any) {
        res.status(500).json({
            message: error.message,
        })
    }
}
