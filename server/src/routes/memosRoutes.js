import express from "express";
import {
  createMemo,
  deleteMemo,
  getAllMemos,
  getMemoById,
  updateMemo,
} from "../controllers/memosController.js";

const router = express.Router();

// GET /api/memos → Fetch all memos
router.get("/", getAllMemos);

// GET /api/memos/:id → Fetch memo by ID
router.get("/:id", getMemoById);

// POST /api/memos → Create a new memo
router.post("/", createMemo);

// PUT /api/memos/:id → Update an existing memo
router.put("/:id", updateMemo);

// DELETE /api/memos/:id → Remove a memo
router.delete("/:id", deleteMemo);

export default router;
