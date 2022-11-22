import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/usermodel.js";
dotenv.config();

const protect=async(req,res,next)=>{
  try{ 
     let token = req.headers.authorization;
    console.log(token);
    if(token){
        let {isAdmin} = jwt.verify(token.split(" ")[1],process.env.SECERT_KEY);
        if(isAdmin) next();
        else throw new Error("Request fail no authorization");
    }
    else{
        throw new Error("Request fail no authorization")
    }
} catch(error){
    res.status(401).send({ error:error.message})
}
    
}
export default protect;