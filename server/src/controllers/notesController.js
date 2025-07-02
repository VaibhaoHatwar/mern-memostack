// Controller to fetch all notes
export const getAllNotes = (req, res) => {
  res.status(200).send("You just fetched the notes");
};

// Controller to create a new note
export const createNote = (req, res) => {
  res.status(201).json({ message: "Note created successfully!" });
};

// Controller to update an existing note by ID
export const updateNote = (req, res) => {
  res.status(200).json({ message: "Note updated successfully!" });
};

// Controller to delete a note by ID
export const deleteNote = (req, res) => {
  res.status(200).json({ message: "Note deleted successfully!" });
};
