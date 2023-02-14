import express from 'express';
import { UserLogin, UserLogout, UserRegister } from '../controllers/UserController.js';

const UserRouter = express.Router();

UserRouter.post("/register", UserRegister);

UserRouter.post("/login", UserLogin);

UserRouter.get("/logout", UserLogout);

export default UserRouter;