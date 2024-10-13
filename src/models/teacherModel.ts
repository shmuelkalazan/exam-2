import mongoose, { Schema, Document, Types } from "mongoose";

export interface ITeacher extends Document {
  _id: Types.ObjectId;
  user_name: string;
  email:string;
  password: string;
  class_name:string;
  students_id: Types.ObjectId[];
}

const TeacherSchema = new Schema<ITeacher>({
  user_name: {
      type: String,
      required: [true, "name is required"],
      minlength: [3, "name is too short, please enter at least 3 characters"],
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
  students_id: {
      type: [Schema.Types.ObjectId],
      ref:"Students",
      default:[]
  }
},{timestamps:true});

const TeacherModel = mongoose.model<ITeacher>("Teachers", TeacherSchema);
export {
  TeacherModel,
} 