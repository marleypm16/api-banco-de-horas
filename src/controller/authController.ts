import { User } from "@prisma/client";
import { AuthService } from "../services/authService"; 
import { Request, Response } from "express";

const authService = new AuthService()
export class AuthController{
    static async login(req:Request,res:Response){
        const {email} : User =  req.body
       
        const token = await authService.login(email)

        res.status(200).json({token})
    }
}