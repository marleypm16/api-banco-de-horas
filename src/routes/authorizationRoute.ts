import express, { Router } from "express";
import { Authorization } from "../authorization/authorization";
const router : Router = express.Router()

router
    .get('/protected',Authorization.checkAuthorization)

export const authorizationRoute = router