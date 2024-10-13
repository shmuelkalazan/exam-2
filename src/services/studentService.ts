import bcrypt from 'bcrypt'
import { IStudent, StudentModel } from '../models/studentModel'
import { ITeacher, TeacherModel } from '../models/teacherModel'

const createStudent = async (student:IStudent):Promise<any | void> =>{
    try {
        console.log(student)
        if(!student.user_name || !student.email || !student.password|| !student.class_name){
            return "All fields must be complete"
        }
        try {
            const className:ITeacher|undefined|any = await TeacherModel.find({ class_name: student.class_name }); 
            console.log("class name "+className[0].class_name)
            
        } catch (error) {
            
            return "class name is not finded"        
        }
    //     if (!className[0].class_name){
    //     }
    //    return className.class_name
     
        const hashedPassword = await bcrypt.hash(student.password,10)
        const dbStudent = new StudentModel({
            user_name:student.user_name,
            email:student.email,
            password:hashedPassword,
            class_name:student.class_name
        })
        console.log(dbStudent)
        await dbStudent.save()
        console.log("student saved successfully")
        return dbStudent
    } catch (err) {
        console.log(err)
        throw err
    }
}

export {
    createStudent,
}