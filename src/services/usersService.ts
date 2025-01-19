import { User } from "@prisma/client";
import db from "../../db/db";
import bcrypt from "bcrypt";

export class UserService{
    async getUsers(){
        return await db.user.findMany();
    }

    async newUser(user:User){

        const senhaCriptografada = await bcrypt.hash(user.password,10)
        return await db.user.create({
            data: {
                ...user,
                password : senhaCriptografada
            }
    })
}
}