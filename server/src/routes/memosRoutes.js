// Import express to create router
import express from "express";

// Import controller functions for memos
import { createMemo, deleteMemo, getAllMemos, updateMemo } from "../controllers/memosController.js";

const router = express.Router();

// Route: GET /api/memos → Get all memos
router.get("/", getAllMemos);

// Route: POST /api/memos → Create a memo
router.post("/", createMemo);

// Route: PUT /api/memos/:id → Update a memo by ID
router.put("/:id", updateMemo);

// Route: DELETE /api/memos/:id → Delete a memo by ID
router.delete("/:id", deleteMemo);

// Export the router
export default router;
