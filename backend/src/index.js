import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/database.js";
import userRouter from "./routes/userRouter.js";
import todoRouter from "./routes/todoRoute.js";
import authMiddleware from "./middleware/authMiddleware.js";

dotenv.config();
const port = 3000;
const app = express();
app.use(express.json());
app.use(cors());
connectDB();

app.use("/api/auth", userRouter);
app.use("/api/todo", authMiddleware, todoRouter);

app.get("/", (req, res) => {
  res.send("Hello there!");
});

app.listen(port, () => {
  console.log("Server is on FIRE!");
});
