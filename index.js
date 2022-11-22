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
  
  connectDB();
 
  
  app.use("/api/Employinfo",router);
  app.use("/api/user",user);

 
 let Port=process.env.PORT || 8000
  app.listen(Port,console.log(`server is running on port ${Port}`));



  //for hossting
  //google cloud
  //Azure -microsoft
  //heroku
  //vercel
  //netlify