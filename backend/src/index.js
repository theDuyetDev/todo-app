import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import userRouter from "./routes/userRouter.js";

dotenv.config();
const port = 3000;

const app = express();
app.use(express.json());
connectDB();

app.use("/api/auth", userRouter);

app.get("/", (req, res) => {
  res.send("Hello there!");
});

app.listen(port, () => {
  console.log("Server is on FIRE!");
});
