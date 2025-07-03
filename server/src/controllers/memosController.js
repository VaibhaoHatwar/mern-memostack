// Controller to fetch all memos
export const getAllMemos = (req, res) => {
  res.status(200).send("You just fetched the memos");
};

// Controller to create a new memo
export const createMemo = (req, res) => {
  res.status(201).json({ message: "Memo created successfully!" });
};

// Controller to update an existing memo by ID
export const updateMemo = (req, res) => {
  res.status(200).json({ message: "Memo updated successfully!" });
};

// Controller to delete a memo by ID
export const deleteMemo = (req, res) => {
  res.status(200).json({ message: "Memo deleted successfully!" });
};
