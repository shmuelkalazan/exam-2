import mongoose, { Schema, Document, Types } from "mongoose";

export interface IStudent extends Document {
  _id: Types.ObjectId;
  user_name: string;
  email:string;
  password: string;
  class_name:string;
  exames: Types.ObjectId[];
}

const StudentSchema = new Schema<IStudent>({
  user_name: {
      type: String,
      required: [true, "name is required"],
      minlength: [3, "Name is too short, please enter at least 3 characters"],
      unique:true
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique:true
  },
  password:{
    type: String,
    required: [true, "password is required"],
  },
  class_name: {
    type: String,
    required: [true, "class name is required"],
    unique:true
  },
  exames: {
      type: [Schema.Types.ObjectId],
      ref:"exames",
      default:[]
  }
},{timestamps:true});

const StudentModel = mongoose.model<IStudent>("Students", StudentSchema);
export {
  StudentModel,
} 
