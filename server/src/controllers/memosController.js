import Memo from "../models/Memo.js";

// Get all memos (sorted by newest first using createdAt: -1)
export const getAllMemos = async (_, res) => {
  try {
    const memos = await Memo.find().sort({ createdAt: -1 }); // -1 = descending order (latest first)
    res.status(200).json(memos);
  } catch (error) {
    console.error("Error in getAllMemos controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get memo by ID
export const getMemoById = async (req, res) => {
  try {
    const memo = await Memo.findById(req.params.id);
    if (!memo) {
      return res.status(404).json({ message: "Memo not found" });
    }
    res.status(200).json(memo);
  } catch (error) {
    console.error("Error in getMemoById controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Create a new memo
export const createMemo = async (req, res) => {
  try {
    const { title, content } = req.body;
    const memo = new Memo({ title, content });
    const savedMemo = await memo.save();
    res.status(201).json(savedMemo);
  } catch (error) {
    console.error("Error in createMemo controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update memo by ID
export const updateMemo = async (req, res) => {
  try {
    const { title, content } = req.body;
    const updatedMemo = await Memo.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );

    if (!updatedMemo) {
      return res.status(404).json({ message: "Memo not found" });
    }

    res.status(200).json(updatedMemo);
  } catch (error) {
    console.error("Error in updateMemo controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Delete memo by ID
export const deleteMemo = async (req, res) => {
  try {
    const deletedMemo = await Memo.findByIdAndDelete(req.params.id);

    if (!deletedMemo) {
      return res.status(404).json({ message: "Memo not found" });
    }

    res.status(200).json({ message: "Memo deleted successfully" });
  } catch (error) {
    console.error("Error in deleteMemo controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
