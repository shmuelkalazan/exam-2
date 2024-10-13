import { Router } from "express";
// import { createNewUser, getAllUsers, getUserByUserName } from "../controllers/userController";

const teacherRouter = Router();
//register teacher
teacherRouter.post("/register", ()=>{});
// //add grade to studant
teacherRouter.get("/", ()=>{});

// //create new user
// //vv
// /**
//  * @swagger
//  * /api/users:
//  *   post:
//  *     summary: Create a new user
//  *     tags: [Users]
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               user_name:
//  *                 type: string
//  *                 example: johndoe123
//  *               email:
//  *                 type: string
//  *                 example: johndoe@example.com
//  *               profile:
//  *                 type: object
//  *                 properties:
//  *                   bio:
//  *                     type: string
//  *                     example: "Software developer and tech enthusiast."
//  *                   socialLinks:
//  *                     type: array
//  *                     items:
//  *                       type: string
//  *                       example: "https://twitter.com/johndoe" 
//  *                     example: [
//  *                       "https://twitter.com/johndoe",
//  *                       "https://linkedin.com/in/johndoe"
//  *                     ]
//  *     responses:
//  *       201:
//  *         description: User created successfully
//  *       400:
//  *         description: Invalid request
//  */
// //get user by uniq name
// /**
//  * @swagger
//  * /api/users/{username}:
//  *   get:
//  *     summary: Retrieve a user by username
//  *     tags: [Users]
//  *     parameters:
//  *       - in: path
//  *         name: username
//  *         required: true
//  *         description: The username of the user
//  *         schema:
//  *           type: string
//  *           example: johndoe123
//  *     responses:
//  *       200:
//  *         description: User found
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: object
//  *               properties:
//  *                 username:
//  *                   type: string
//  *                   example: johndoe123
//  *                 email:
//  *                   type: string
//  *                   example: johndoe@example.com
//  *                 profile:
//  *                   type: object
//  *                   properties:
//  *                     bio:
//  *                       type: string
//  *                       example: "Software developer and tech enthusiast."
//  *                     socialLinks:
//  *                       type: array
//  *                       items:
//  *                         type: string
//  *                         example: "https://twitter.com/johndoe" 
//  *                       example: [
//  *                         "https://twitter.com/johndoe",
//  *                         "https://linkedin.com/in/johndoe"
//  *                       ] 
//  *       404:
//  *         description: User not found
//  */

export default teacherRouter;
