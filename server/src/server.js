// Load environment variables from .env
import dotenv from "dotenv";
dotenv.config();
console.log("🧪 MONGO_URI:", process.env.MONGO_URI); // Debug: check if env is loaded

// Import express and other modules
import express from "express";
import { connectDB } from "./config/db.js";
import notesRoutes from "./routes/notesRoutes.js";

// Initialize express app
const app = express();

// Connect to MongoDB
connectDB();

// Set server port from .env or default to 5001
const PORT = process.env.PORT || 5001;

// Notes API routes
app.use("/api/notes", notesRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server started on PORT: ${PORT}`);
});
