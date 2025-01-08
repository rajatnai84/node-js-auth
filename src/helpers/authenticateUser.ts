import { User } from "@prisma/client";
import { getUser } from "@services/userService";
import { generateToken } from "@utils/jwt";
import { comparePasswords } from "@utils/passwordUtils";

export async function authenticateUser(username: string, password: string): Promise<string | null> {
    const user: User | null = await getUser(username);
    if (!user) return null;

    const isValidPassword = await comparePasswords(password, user.password);
    return isValidPassword ? generateToken(user) : null;
}