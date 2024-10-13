import mongoose, { Schema, Document, Types } from "mongoose";

export interface IStudent extends Document {
  _id: mongoose.Schema.Types.ObjectId;
  user_name: string;
  email:string;
  password: string;
  class_key:mongoose.Schema.Types.ObjectId; 
  exames_id: Types.ObjectId[];
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
  class_key: {
    type: String,
    required: [true, "class name is required"],
  },
  exames_id: {
      type: [Schema.Types.ObjectId],
      ref:"exames",
      default:[]
  }
});

const StudentModel = mongoose.model<IStudent>("Students", StudentSchema);
export {
  StudentModel,
} 
