import { Router } from "express";
const studentRouter = Router();

//rgister student
studentRouter.post("/register", ()=>{});
//


// //create new post
// //vv
// /**
//  * @swagger
//  * /api/posts:
//  *   post:
//  *     summary: Create a new post
//  *     tags: [Posts]
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               title:
//  *                 type: string
//  *               content:
//  *                 type: string
//  *               author:
//  *                 type: string
//  *     responses:
//  *       201:
//  *         description: Post created successfully
//  *       400:
//  *         description: Invalid request
//  */
// postRouter.post("/", createPost);
// //get all post
// /**
//  * @swagger
//  * /api/posts:
//  *   get:
//  *     summary: Get all posts
//  *     tags: [Posts]
//  *     responses:
//  *       200:
//  *         description: List of posts
//  *       400:
//  *         description: Invalid request
//  */
// postRouter.get("/", getPosts);
// //get post by id
// postRouter.get("/:id", getPost);
// //update post by id
// postRouter.put("/:id", updatePost);
// //delet post by id
// postRouter.delete("/:id", deletePost);
// //add comments by post id
// postRouter.post("/:id/comments", addComment);

export default studentRouter;
