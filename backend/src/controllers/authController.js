import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { comparePassword, hashPassword } from "../utils/passwordUtils.js";
import dotenv from "dotenv";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

const signup = async (req, res) => {
  const { email, password, username } = req.body;

  try {
    //Check if email exist
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already in use" });
    }

    // Hash password using bcryptjs
    const hashedPassword = await hashPassword(password);

    // Create new user
    const newUser = new User({ email, password: hashedPassword, username });
    await newUser.save();

    // Send success response
    res.status(201).json({ message: "User created succesfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server Error" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email" });
    }

    // Check if password provided is valid
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // If password is valid, generate accessToken
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({
      message: "Logged in!",
      token,
      user: { email: user.email, username: user.username },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal server error");
  }
};

export { login, signup };
