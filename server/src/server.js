// Import express using ES module syntax 
import express from "express";

// Import modular route handler for notes
import notesRoutes from "./routes/notesRoutes.js";

// Initialize the Express application
const app = express();

// Define the port (can be replaced later with environment variable)
const PORT = 5001;

// Mount notes routes at /api/notes
app.use("/api/notes", notesRoutes);

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`🚀 Server started on PORT: ${PORT}`);
});
