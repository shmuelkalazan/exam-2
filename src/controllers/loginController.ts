import { Request, Response, NextFunction } from "express";
import { login } from "../services/loginService";

const loginUser = async (req:Request ,res:Response) => {
    try {
        const result = await login(req.body)
        if( Array.isArray(result) && result.every(item => typeof item === "string")){
            res.cookie('token' ,result)
            res.json({
                token:result,
                msg:"nice to see you " + req.body.user_name
            })
        }
        else{
            res.status(404).json({
                msg:result,
            })
        }
    } catch (error) {
        res.status(400).send(error)
    }
}
export {
    loginUser
}