import Note from "../models/Note.js";


export async function getAllNote(req,res) {
  try {
    const note = await Note.find().sort({createdAt: -1})
    res.status(200).json(note);
  } catch (error) {
    console.error("Error in getting all note:", error);
    res.status(500).json({message:"Internal server error"});
  }
  
}

export async function getNoteById(req,res){
  try {
    const note = await Note.findById(req.param.id);
    if (!note) return res.status(404).json({message:"Note not found"});
    res.status(200).json(note);
  } catch (error) {
    console.error("Error in getNOTE controller :", error);
    res.status(500).json({message:"Internal server error"});
  }
}

export async  function createNote(req,res){
  try {
    const {title,content} = req.body
    const newNote = new Note({title,content});
    const savedNote = await newNote.save();
    res.status(201).json(savedNote)
  } catch (error) {
     console.error("Error in creatNOTE controller :", error);
    res.status(500).json({message:"Internal server error"});
  }
}

export  function updateNote (req,res){
  res.status(200).json({message:"the note is updated successfully"});;
}

export  function deleteNote (req,res){
  res.status(200).json({message:"the note deleted successfully"});
}

