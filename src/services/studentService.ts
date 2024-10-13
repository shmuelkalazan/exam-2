import bcrypt from 'bcrypt'
import { IStudent, StudentModel } from '../models/studentModel'
import { ITeacher, TeacherModel } from '../models/teacherModel'

const createStudent = async (student:IStudent):Promise<any | void> =>{
    try {
        if(!student.user_name || !student.email || !student.password|| !student.class_key){
            return "All fields must be complete"
        }
        const className:ITeacher|undefined|any = await TeacherModel.find({ class_name: student.class_key });             
        if(!className[0]){
            return "class name not found"        
        }
        const hashedPassword = await bcrypt.hash(student.password,10)
        const dbStudent = new StudentModel({
            user_name:student.user_name,
            email:student.email,
            password:hashedPassword,
            class_key:student.class_key
        })
        try {
            const teacher = await TeacherModel.findOneAndUpdate(
                { class_name: student.class_key }, 
                { $push: { students_id: dbStudent._id } },
                { new: true } 
              );
            await teacher?.save()
        } catch (error) {
            return "class not updated";
        } 
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