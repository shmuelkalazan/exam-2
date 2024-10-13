import { Router } from "express";
import { onlyTeachers, onlytTeachersAndStudents } from "../middleware/authNiddleware";
import { createNewGrade, getAllGradesByClassId, updateGrade } from "../controllers/gradesController";
const gradesRouter = Router();
//get avarage
gradesRouter.get("/",onlyTeachers, ()=>{});

//add greade to student
gradesRouter.post("/",onlyTeachers,createNewGrade);

//get all grades to all the class
gradesRouter.get("/:class_id",onlyTeachers,getAllGradesByClassId);

//updat grade
gradesRouter.put("/",onlyTeachers,updateGrade);


//get grade
gradesRouter.get("/:student_name",onlytTeachersAndStudents, ()=>{});






// /**
//  * @swagger
//  * /sample:
//  *   get:
//  *     summary: Returns a sample message
//  *     responses:
//  *       200:
//  *         description: A successful response
//  */

// router.get('/sample', (req:any, res:any) => {
//   res.json({ message: 'This is a sample message' });
// });

// module.exports = router;
export default gradesRouter