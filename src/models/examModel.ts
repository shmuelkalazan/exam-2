import mongoose, { Schema, Document, Types } from "mongoose";

export interface IExam extends Document {
  _id: Types.ObjectId;
  profession:string;
  test_details:string;
  test_grade:number;
  class_name:string;
  student_id: Types.ObjectId;
  teacher_id: Types.ObjectId;
}

const ExamSchema = new Schema<IExam>({

  profession: {
    type: String,
  },
  test_details:{
    type:String,
    required:true
  },
  test_grade:{
    type:Number,
    required:true
  },
  class_name:{
    type: String,
  },
  student_id: {
    type: Schema.Types.ObjectId,
      ref:"Students",
  },
  teacher_id: {
      type: Schema.Types.ObjectId,
      ref:"Teachers",
  }
},{timestamps:true});

const examModel = mongoose.model<IExam>("Exames", ExamSchema);
export {
    examModel,
} 