import mongoose, { Schema, Document, Types } from "mongoose";

export interface IUser extends Document {
  _id: Types.ObjectId;
  user_name: string;
  email: string;
  profile: {
    bio?: string;
    socialLinks?: string[];
  };
  posts: Types.ObjectId[];
}

const UserSchema = new Schema<IUser>({
  user_name: {
      type: String,
      required: [true, "User name is required"],
      minlength: [3, "Name is too short, please enter at least 3 characters"],
      unique:true
  },
  email: {
    type: String,
    required: [true, "User name is required"],
    unique:true
  },
  profile: {
    bio: {
      type: String,
      maxlength: [500, "Bio should not exceed 500 characters"],
    },
    socialLinks: {
      type: [String],
    },
  },
  posts: {
      type: [Schema.Types.ObjectId],
      ref:"Post",
      default:[]
  }
},{timestamps:true});

const UserModel = mongoose.model<IUser>("User", UserSchema);
export {
   UserModel
} 
