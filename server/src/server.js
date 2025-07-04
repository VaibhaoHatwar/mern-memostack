import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import memosRoutes from "./routes/memosRoutes.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Parse incoming JSON requests
app.use(express.json());

// Rate limiter middleware (global)
app.use(rateLimiter);

// Memo API routes
app.use("/api/memos", memosRoutes);

// 404 Fallback for undefined routes
app.use("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Connect to DB and start server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server is running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ Failed to connect to MongoDB:", error);
    process.exit(1); // Exit on DB connection failure
  });
