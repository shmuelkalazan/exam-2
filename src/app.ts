import express from "express";
import dotenv from "dotenv";
// import postRouter from "./routes/postRoutes";
import userRouter from "./routes/teacherRoutes";
// import { errorHandler } from "./middleware/errorHandler";
import connectDB from "./config/db";
import teacherRouter from "./routes/teacherRoutes";
import studentRouter from "./routes/studentRoutes";
import gradesRouter from "./routes/gradesRouter";
// const { specs, swaggerUi } = require('./swagger');

dotenv.config();

const app = express();
const port = process.env.PORT || 1115;

// Middlewares
app.use(express.json());
connectDB();

// Routes
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use("/api/teachers",teacherRouter );
app.use("/api/students",studentRouter );
app.use("/api/grades",gradesRouter );


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// export default app;
