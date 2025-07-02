// Import express using ES module syntax
import express from "express";

// Initialize the Express application
const app = express();

// Define the port (can later be replaced with process.env.PORT)
const PORT = 5001;

/* 
  REST API Endpoints for /api/notes 
  - GET:    Fetch notes
  - POST:   Create a new note
  - PUT:    Update an existing note by ID
  - DELETE: Delete a note by ID
*/
app.get("/api/notes", (req, res) => {
  res.status(200).send("You got 20 notes");
});

app.post("/api/notes", (req, res) => {
  res.status(201).json({ message: "Note created successfully!" });
});

app.put("/api/notes/:id", (req, res) => {
  res.status(200).json({ message: "Note updated successfully!" });
});

app.delete("/api/notes/:id", (req, res) => {
  res.status(200).json({ message: "Note deleted successfully!" });
});

// Start the server and listen on specified port
app.listen(PORT, () => {
  console.log(`🚀 Server started on PORT: ${PORT}`);
});
