import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import teacherRouter from "./routes/teacherRoutes";
import studentRouter from "./routes/studentRoutes";
import gradesRouter from "./routes/gradesRouter";
import loginRouter from "./routes/loginRouter";
import cookieParser from "cookie-parser";
// const { specs, swaggerUi } = require('./swagger');


const app = express();
dotenv.config();

// Middlewares
app.use(express.json());
connectDB();
app.use(cookieParser())

// Routes
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use("/api/login",loginRouter)
app.use("/api/teacher",teacherRouter );
app.use("/api/student",studentRouter );
app.use("/api/grade",gradesRouter );


const port = process.env.PORT || 1115;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
