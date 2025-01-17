import express, { Router } from 'express';
import { UserController } from '../controller/userController';

const router : Router = express.Router();

router
    .get('/users',UserController.getUsers)
    .get('/users/:id')
    .post('/users',UserController.newUser)
    .put('/users/:id')
    .delete('/users/:id')

export const userRouter = router;