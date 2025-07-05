import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { connectDB } from "./config/db.js";
import memosRoutes from "./routes/memosRoutes.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// ➤ Global Middlewares
app.use(express.json());
app.use(rateLimiter);
app.use(cors({ origin: "http://localhost:5173" }));

// ➤ API Routes
app.use("/api/memos", memosRoutes);

// ➤ 404 Fallback
app.use("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// ➤ Start Server After DB Connection
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server is running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ Failed to connect to MongoDB:", error);
    process.exit(1);
  });