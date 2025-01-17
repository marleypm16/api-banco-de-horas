import express, { Router } from "express";
import { AuthController } from "../controller/authController";
const router : Router = express.Router()

router
    .post('/login',AuthController.login)

export const authRouter = router