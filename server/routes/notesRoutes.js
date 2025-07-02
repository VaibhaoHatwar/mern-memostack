// Import express to create a router instance
import express from "express";

const router = express.Router();

// GET /api/notes - Fetch all notes (placeholder response)
router.get("/", (req, res) => {
  res.status(200).send("You just fetched the notes");
});

// POST /api/notes - Create a new note (placeholder response)
router.post("/", (req, res) => {
  res.status(201).json({ message: "Note created successfully!" });
});

// PUT /api/notes/:id - Update a note by ID (placeholder response)
router.put("/:id", (req, res) => {
  res.status(200).json({ message: "Note updated successfully!" });
});

// DELETE /api/notes/:id - Delete a note by ID (placeholder response)
router.delete("/:id", (req, res) => {
  res.status(200).json({ message: "Note deleted successfully!" });
});

// Export the router to be used in server.js
export default router;
