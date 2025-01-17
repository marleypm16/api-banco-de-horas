import { User } from "@prisma/client";
import db from "../../db/db";

export class UserService{
    async getUsers(){
        return await db.user.findMany();
    }

    async newUser(user:User){
        return await db.user.create({
            data: user
    })
}
}