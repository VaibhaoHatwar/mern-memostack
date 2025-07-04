import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import memosRoutes from "./routes/memosRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Connect to MongoDB
connectDB();

// Parse incoming JSON requests
app.use(express.json());

// My custome middleware
app.use((req, res, next) =>{
  console.log(`Req method is ${req.method} & req url is ${req.url}`);
  next();
});

// Memo API routes
app.use("/api/memos", memosRoutes);

// Catch-all 404 for undefined routes
app.use("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
