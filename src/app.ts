import express from "express";
import dotenv from "dotenv";
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

app.use("/api/teacher",teacherRouter );
app.use("/api/student",studentRouter );
app.use("/api/grade",gradesRouter );


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
