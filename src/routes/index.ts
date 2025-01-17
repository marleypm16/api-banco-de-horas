import express, {Express} from "express";
import { userRouter } from "./userRouter";

const router = (app : Express) =>{
    app.use(
        express.json(),
        userRouter
    )
}

export default router;
