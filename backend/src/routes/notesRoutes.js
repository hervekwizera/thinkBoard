import express, { Router } from "express";
import { getAllNotes,createNote,updateNote,deleteNote } from "../controllers/notesController.js";

const noteRouter = express.Router();

noteRouter.get("/",getAllNotes);
noteRouter.post("/",createNote);
noteRouter.put("/:id",updateNote);
noteRouter.delete("/:id",deleteNote);

export default noteRouter;