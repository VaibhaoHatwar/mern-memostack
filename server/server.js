// Import express using ES module syntax
import express from "express"

// Initialize the Express application
const app = express();

// Define the port (can later be replaced with process.env.PORT)
const PORT = 5001;

// Health check route (basic test route)
app.get("/", (req, res) => {
  res.send("✅ API is running");
});

// Start the server and listen for incoming requests on specified port
app.listen(PORT, () => {
  console.log(`🚀 Server started on PORT: ${PORT}`);
});