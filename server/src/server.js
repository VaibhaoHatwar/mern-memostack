// Load environment variables from .env
import dotenv from "dotenv";
dotenv.config();

// Import express and other modules
import express from "express";
import { connectDB } from "./config/db.js";
import memosRoutes from "./routes/memosRoutes.js";

// Initialize express app
const app = express();

// Connect to MongoDB
connectDB();

// Set server port from .env or default to 5001
const PORT = process.env.PORT || 5001;

// Memos API routes
app.use("/api/memos", memosRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at: http://localhost:${PORT}`);
});
