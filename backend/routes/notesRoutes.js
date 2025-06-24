import express, { Router } from "express";

const noteRouter = express.Router();


noteRouter.get("/",(req,res)=>{
  res.status(200).send("you just fetch the notes");
});

noteRouter.post("/",(req,res)=>{
  res.status(201).json({message:"Note created successully!"});
});


noteRouter.put("/:",(req,res)=>{
  res.status(200).json({message:"Note update successully!"});
});

noteRouter.delete("/:",(req,res)=>{
  res.status(200).json({message:"Note deleted successfully!"})
})

export default noteRouter;