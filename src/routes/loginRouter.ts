import { Router } from "express";
import { loginUser } from "../controllers/loginController";
const loginRouter = Router();

//login student and teacher
loginRouter.post("/",loginUser);
//
export default loginRouter