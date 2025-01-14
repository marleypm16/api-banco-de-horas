import express, {Express} from "express";

const router = (app : Express) =>{
    app.use(
        express.json()
    )
}

export default router;
