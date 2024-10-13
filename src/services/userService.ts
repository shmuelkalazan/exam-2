import { IPost } from "../models/postModel"
import {UserModel} from "../models/userModel"

const createUser = async (user:any):Promise<any | void> =>{
    try {
        if (!user.user_name || !user.email){
            return "please enter user name and email"
        }
        const dbUser:any|undefined = new UserModel({
            user_name:user.user_name,
            email:user.email,
            profile:{
                bio:user.profile.bio || "",
                socialLinks:user.profile.socialLinks ||""
            }
        })
        await dbUser.save()
        console.log("user saved successfully")
        return dbUser
    } catch (err) {
        console.log(err)
        return err
    }
}

const getUserByName = async (user:any):Promise<any | void> =>{
    try {
        if (!user){
            return "please enter user name "
        }
        const dbUser:any|undefined = await UserModel.find({ user_name: user });
        if (dbUser[0]){
            return dbUser
        }
        else{
            return "user name not found"
        }
    } catch (err) {
        console.log(err)
        return err
    }
}
export {
    createUser,
    getUserByName
}