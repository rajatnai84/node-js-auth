import { User } from '@custom-types/db';
import jwt from 'jsonwebtoken';

export function generateToken(user: User) {
    return jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET as string,
        {
            expiresIn: "24h",
        }
    )
}

export async function isTokenValid(token:string) {
    try {
        const decode = await jwt.verify(token, process.env.JWT_SECRET as string) as {id:number}
        return decode.id
    } catch(error) {
        console.log(error)
        return null
    }
}

