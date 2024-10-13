import { Router } from "express";
const gradesRouter = Router();

//login
gradesRouter.post("/login", ()=>{});

//add greade to student
gradesRouter.post("/", ()=>{});

//get all grades to all the class
gradesRouter.get("/:class_name", ()=>{});

//change grade
gradesRouter.put("/", ()=>{});

//get avarage
gradesRouter.get("/", ()=>{});

//getgrade
gradesRouter.get("/:student_name", ()=>{});






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