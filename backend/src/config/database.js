import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to your Database!");
  } catch (error) {
    console.log(`Error occur when connecting database: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
