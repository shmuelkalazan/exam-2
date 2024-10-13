import { examModel, IExam } from "../models/examModel";
import { gradeDto } from "../models/gradedto";
import { ITeacher, TeacherModel } from "../models/teacherModel"
import bcrypt from 'bcrypt'
const createGrade = async (exam:IExam):Promise<any | void> =>{
    try {
        if(!exam.profession || !exam.test_details|| !exam.test_grade
            || !exam.class_name ||! exam.student_id || !exam.teacher_id
        ){
            return "All fields must be complete"
        }
        const updateExam:IExam|any = new examModel({
            profession:exam.profession,
            test_details:exam.test_details,
            test_grade:exam.test_grade,
            class_name:exam.class_name,
            student_id:exam.student_id,
            teacher_id:exam.teacher_id
        })              
        await updateExam.save()
        console.log("grade saved successfully")
        return updateExam
        
    } catch (err) {
        console.log(err)
        throw err
    }
}

const getAllGradesByClasIdService = async (_id:string):Promise<any | void> =>{
    try {
        if(!_id
        ){
            return "enter _id"
        }
        const exames:[IExam]|any = examModel.find({ teacher_id: _id }); 
        console.log(exames)           
        console.log("grade saved successfully")
        return exames
        
    } catch (err) {
        console.log(err)
        throw err
    }
}

const updateGradeService = async (new_grade:gradeDto):Promise<any | void> =>{
    try {
        if(!new_grade.grade || !new_grade._id
        ){
            return "enter grade and _id"
        }
        try {
            const exam = await examModel.findByIdAndUpdate(
                new_grade._id,             
                { test_grade: new_grade.grade }, 
                { new: true }              
            );
            return exam
            
        } catch (error) {
            return "exam not found"
        }
     
    } catch (err) {
        console.log(err)
        throw err
    }
}

const getAvarageService = async (new_grade:gradeDto):Promise<any | void> =>{
    // try {
    //     if(!new_grade.grade || !new_grade._id
    //     ){
    //         return "enter grade and _id"
    //     }
    //     try {
    //         const exam = await examModel.findByIdAndUpdate(
    //             new_grade._id,             
    //             { test_grade: new_grade.grade }, 
    //             { new: true }              
    //         );
    //         return exam
            
    //     } catch (error) {
    //         return "exam not found"
    //     }
     
    // } catch (err) {
    //     console.log(err)
    //     throw err
    // }
}

export {
    createGrade,
    getAllGradesByClasIdService,
    updateGradeService,
    getAvarageService
}