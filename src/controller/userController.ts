import { User } from "@prisma/client";
import { UserService } from "../services/usersService";
import { Request, Response } from "express";
const userService = new UserService();

export class UserController{
    static async getUsers(req : Request,res : Response){
        const users = await userService.getUsers();
        try {
            res.status(200).json(users);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error : any) {
            res.status(500).json({message: error.message});
        }
    }

   static async newUser(req : Request,res : Response){
        const newUser: User = req.body;
        try {
            await userService.newUser(newUser);
            res.status(200).send("User created");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error : any) {
            res.status(500).json({message: error.message});
        }
    }
}