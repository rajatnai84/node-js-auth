import bcrypt from 'bcrypt';

export async function comparePasswords(plainPassword: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(plainPassword, hashedPassword);
}

export async function hashPassword(plainPassword: string): Promise<string> {
    return await bcrypt.hash(plainPassword, 10);
}