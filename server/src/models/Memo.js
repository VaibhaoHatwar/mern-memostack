// Import mongoose to define the schema and model
import mongoose from "mongoose";

// Define the schema for a Memo document
const memoSchema = new mongoose.Schema(
  {
    // Title of the memo (required)
    title: {
      type: String,
      required: true,
    },
    // Content/body of the memo (required)
    content: {
      type: String,
      required: true,
    },
  },
  {
    // Automatically add createdAt and updatedAt timestamps
    timestamps: true,
  }
);

// Create the Memo model from the schema
const Memo = mongoose.model("Memo", memoSchema);

// Export the Memo model for use in controllers/routes
export default Memo;

