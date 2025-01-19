import express, {Express} from "express";
import { userRouter } from "./userRouter";
import { authRouter } from "./authRoute";
import { authorizationRoute } from "./authorizationRoute";

const router = (app : Express) =>{
    app.use(
        express.json(),
        authorizationRoute,
        authRouter,
        userRouter
    )
}

export default router;
