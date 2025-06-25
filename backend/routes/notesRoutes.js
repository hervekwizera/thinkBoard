import express, { Router } from "express";
import { getAllNotes } from "../controllers/notesController.js";

const noteRouter = express.Router();

noteRouter.get("/",getAllNotes)

noteRouter.post("/",(req,res)=>{
  res.status(201).json({message:"the note is created successfully"});
})

noteRouter.put("/:id",(req,res)=>{
  res.status(200).json({message:"the note is updated successfully"});;
})

noteRouter.delete("/:id",(req,res)=>{
  res.status(200).json({message:"the note deleted successfully"});
})

export default noteRouter;