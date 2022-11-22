import mongoose from'mongoose';
  import express from'express';
  import connectDB from "./db.js";
  import router from './routes/employinfo.js';
  import Employinfo from './models/EmployinfoModel.js';
  import user from'./routes/users.js';
  import dotenv from "dotenv";
  dotenv.config();
 

  const app=express()
  app.use(express.json());
  // it returns a promise
  connectDB();
 
  
  app.use("/api/Employinfo",router);
  app.use("/api/user",user);
// app.get("/",async(req,res)=>{
   
 
//  });
//  app.get("/:_id",async(req,res)=>{
    
 
//  })
 
//  app.post("/",async(req,res)=>{
    
//  });
 
// //  app.post("/",async(req,res)=>{

// //      let data=[req.body];
// //      let result= await Employinfo.createMany(data);
// //     res.send(result);
// //  });
 
//  app.put("/:_id",async(req,res)=>{
     
 
//  });
//  app.delete("/:_id",async(req,res)=>{
    
//  });
 
 let Port=process.env.PORT || 8000
  app.listen(Port,console.log(`server is running on port ${Port}`));