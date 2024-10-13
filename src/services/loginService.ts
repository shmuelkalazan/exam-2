import { loginDto } from "../models/loginDto"
import { IStudent, StudentModel } from "../models/studentModel"
import { ITeacher, TeacherModel } from "../models/teacherModel"
import {Jwt} from 'jsonwebtoken'

const bcrypt = require("bcrypt")
const jwt  = require('jsonwebtoken')

const login = async (user:loginDto):Promise<any | void>=> {
    try {
        if (!user.password){
            return "password not found"
        }
        const dbTeacher  = await TeacherModel.findOne({user_name:user.user_name})
        const dbStudent  = await StudentModel.findOne({user_name:user.user_name})
        if (!dbStudent && !dbTeacher){
            return "user not found"
        }
        let loginUser :any |IStudent|ITeacher = null
        let job:string |null = ""
        if(dbStudent){
            loginUser = dbStudent
            job = "student"
        }
        else{
            loginUser = dbTeacher
            job = "teacher"
        }
        if (!(await bcrypt.compare(user.password , loginUser.password))) 
            {return "wrong password"}
        const token = await jwt.sign({
            user_name:loginUser.user_name ,
            password:loginUser.password,
            id:loginUser._id,
            job:job },
            process.env.TOKEN_SECRET ,{
                expiresIn:"30m"
            });
    return [token]        
    } catch (err) {
        console.log(err)
        throw new Error("something not good...")
    }
}

export {
    login
}