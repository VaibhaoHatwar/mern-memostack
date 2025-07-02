// Import mongoose for MongoDB connection
import mongoose from "mongoose";

// Connect to MongoDB using URI from environment variable
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MONGODB CONNECTED SUCCESSFULLY!");
  } catch (error) {
    console.error("Error connecting to MONGODB", error);
    process.exit(1); // Exit process with failure code
  }
};
