export  function getAllNotes (req,res){
  res.status(200).send("my name is smoking mirror.");
}

export  function createNote(req,res){
  res.status(201).json({message:"the note is created successfully"});
}

export  function updateNote (req,res){
  res.status(200).json({message:"the note is updated successfully"});;
}

export  function deleteNote (req,res){
  res.status(200).json({message:"the note deleted successfully"});
}

