import db from "../../db/db";
import { sign } from "jsonwebtoken";
import bcrypt from "bcrypt";
export class AuthService {
    async login(email:string) {
        const user = await db.user.findUnique({
            where: {
                email: email
            }
        })
        if (!user) {
            throw new Error('User not found')
        }
        senhasIguais = bcrypt.compare(user.password,p)

        const token = sign({email}, process.env.JWT_SECRET as string,
            {
                expiresIn:8699
            }
        )
        return token
    }
}