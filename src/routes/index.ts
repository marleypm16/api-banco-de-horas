import express, {Express} from "express";
import { userRouter } from "./userRouter";
import { authRouter } from "./authRoute";

const router = (app : Express) =>{
    app.use(
        express.json(),
        authRouter,
        userRouter
    )
}

export default router;
