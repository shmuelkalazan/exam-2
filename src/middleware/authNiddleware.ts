import { Request, Response, NextFunction } from "express";
import { nextTick } from "process";
const jwt = require("jsonwebtoken")
const cookie = require("cookie-parser")

const onlyTeachers =async (req:Request ,res:Response,next:NextFunction) => {
    try {
        const token =  (req as any).cookies.token as string  
        console.log(token)
        const userData = await jwt.verify(token[0],process.env.TOKEN_SECRET)
        if (userData.job != "teacher"){
            res.status(403).send("you are not teacher")
        }
        next()
    } catch (error) {
        console.log(error)
        res.status(401).send(error)
    }

}

const onlytTeachersAndStudents = async (req:Request ,res:Response,next:NextFunction) => {
    try {
        const token =  (req as any).cookies.token as string  
        console.log(token)
        const userData = await jwt.verify(token[0],process.env.TOKEN_SECRET)
        if (userData.job != "teacher" ||userData.job != "teacher" ){
            res.status(403).send("you are not teacher or student")
        }
        next()
    } catch (error) {
        console.log(error)
        res.status(401).send(error)
    }
}

export {
    onlyTeachers,
    onlytTeachersAndStudents
}
