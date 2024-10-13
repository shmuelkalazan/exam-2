import { Request, Response, NextFunction } from "express";
import { StudentModel } from "../models/studentModel"
import { createStudent } from "../services/studentService"

const studentRegister = async (req:Request ,res:Response) => {
    try {
        const result :any = await createStudent(req.body)
       if ( result instanceof  StudentModel){
            res.status(201).json(result)
        }
        else{
            res.status(404).json(result)
        }
    } catch (err) {
        res.status(400).json(err)
    }
}
export {
    studentRegister
}
// export const createNewUser = async (req: Request, res: Response) => {
//     try {
//         const result:any = await createUser(req.body)
//         if ( result instanceof  UserModel){
//             res.status(201).json(result)
//         }
//         else{
//             res.status(404).json(result)
//         }
//     } catch (err) {
//         res.status(500).json(err)
//     }
// };

// export const getUserByUserName = async (req: Request, res: Response) => {
//     try {
//         const result:any = await getUserByName(req.params.username)
//         if (typeof result === "object"){
//             res.status(201).json(result)
//         }
//         else{
//             res.status(404).json(result)
//         }
//     } catch (err) {
//         res.status(500).json(err)
//     }
// };

// export const getAllUsers = async (req: Request, res: Response) => {
   
// };

// // Optionally, add DELETE and EDIT functions
