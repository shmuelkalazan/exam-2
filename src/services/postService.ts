import { IPost, PostModel } from "../models/postModel"
import {UserModel} from "../models/userModel"

const createNewPost = async (post:any):Promise<any | void> =>{
    try {
      
        if (!post.title || !post.content){
            return "please enter title and content"
        }
        const dbpost:any|undefined = new PostModel({
                title:post.title,
                content:post.content,
                author:post.author
            }
        )
        try {
            const user = await UserModel.findOneAndUpdate(
                { _id: post.author }, 
                { $push: { posts: dbpost._id } },
                { new: true } 
              );
            await user?.save()
            await dbpost.save()
            console.log("post saved successfully")
            return dbpost
        } catch (error) {
            return "User not found.";
        }
    } catch (err) {
        console.log(err)
        return err
    }
}


const getallPosts = async ():Promise<any | void> =>{
    try {
    const allPosts = await PostModel.find()
    if (allPosts){
        return allPosts
    }
    else{
        return "posts not found"
    }  
    } catch (err) {
        console.log(err)
        return err
    }
}
export {
    createNewPost,
    getallPosts
}