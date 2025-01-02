import { getUserFromId } from "@services/userService";
import { isTokenValid } from "@utils/jwt";

export const isAuthenticated = async (req, res, next: Function) => {
    try {
        const token = req.cookies.token;
        if (token == null || !token) {
            return res.status(401).json({
                success: false,
                message: "User is not logged in!"
            })
        }
        else {
            const id = await isTokenValid(token)
            req.user = await getUserFromId(id);
        }
        next()
    } catch (error) {
        res.status(500).json({
            message: error.message,
        })
    }
}
