import db from "../../db/db";
import { sign } from "jsonwebtoken";
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
        const token = sign({email}, process.env.JWT_SECRET as string,
            {
                expiresIn:8699
            }
        )
        return token
    }
}