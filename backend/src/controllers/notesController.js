import Note from "../models/Note.js";

// GET all notes
export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (error) {
    console.error("❌ Error in getAllNotes:", error.message);
    res.status(500).json({ message: "Failed to fetch notes" });
  }
}

// GET a note by ID
export async function getNoteById(req, res) {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json(note);
  } catch (error) {
    console.error("❌ Error in getNoteById:", error.message);
    res.status(500).json({ message: "Failed to fetch the note" });
  }
}

// POST create a new note
export async function createNote(req, res) {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: "Title and content are required" });
    }

    const newNote = new Note({ title, content });
    const savedNote = await newNote.save();

    res.status(201).json(savedNote);
  } catch (error) {
    console.error("❌ Error in createNote:", error.message);
    res.status(500).json({ message: "Failed to create note" });
  }
}

// PUT update an existing note
export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: "Title and content are required" });
    }

    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true, runValidators: true }
    );

    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json(updatedNote);
  } catch (error) {
    console.error("❌ Error in updateNote:", error.message);
    res.status(500).json({ message: "Failed to update note" });
  }
}

// DELETE a note
export async function deleteNote(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);

    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json({ message: "Note deleted successfully", note: deletedNote });
  } catch (error) {
    console.error("❌ Error in deleteNote:", error.message);
    res.status(500).json({ message: "Failed to delete note" });
  }
}
