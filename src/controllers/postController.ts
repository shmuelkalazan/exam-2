// import { Request, Response, NextFunction } from "express";
// import { PostModel } from "../models/postModel";
// import {UserModel} from "../models/userModel";
// import { createNewPost ,getallPosts} from "../services/postService";

// // Create a new post
// const createPost = async (
//   req: Request,res: Response): Promise<void> => {
//     try {
//       const result:any = await createNewPost(req.body)
//       if ( result instanceof  PostModel){
//           res.status(201).json(result)
//       }
//       else{
//           res.status(404).json(result)
//       }
//   } catch (err) {
//       res.status(500).json(err)
//   }
// };

// // Delete a post
// export const deletePost = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ): Promise<void> => {};



// // Get all posts
// export const getPosts = async (
//   req: Request,res: Response,
// ): Promise<void> => {
//     try {
//       const result:any = await getallPosts()
//       if (Array.isArray(result) &&
//         result.every(item => typeof item === "object" && item !== null)){
//           res.status(200).json(result)
//         }
//         else{
//           res.status(404).json(result)
//         }
       

//   } catch (err) {
//       res.status(500).json(err)
//   }
// };


// // Get a single post by ID
// export const getPost = async (
//   req: Request,
//   res: Response,
// ): Promise<void> => {
//   try {
//     console.log("in controller")
//     const result:any = await getallPosts()
//     if ( result instanceof  PostModel){
//         res.status(201).json(result)
//     }
//     else{
//         res.status(404).json(result)
//     }
// } catch (err) {
//     res.status(500).json(err)
// }
// };


// // Update a post
// export const updatePost = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ): Promise<void> => {};


// // Add a comment to a post by post id
// export const addComment = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ): Promise<void> => {};

// export {
//   createPost
// }

