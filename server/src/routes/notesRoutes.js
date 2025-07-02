// Import express to create router
import express from "express";

// Import controller functions for notes
import { createNote, deleteNote, getAllNotes, updateNote } from "../controllers/notesController.js";

const router = express.Router();

// Route: GET /api/notes → Get all notes
router.get("/", getAllNotes);

// Route: POST /api/notes → Create a note
router.post("/", createNote);

// Route: PUT /api/notes/:id → Update a note by ID
router.put("/:id", updateNote);

// Route: DELETE /api/notes/:id → Delete a note by ID
router.delete("/:id", deleteNote);

// Export the router
export default router;
