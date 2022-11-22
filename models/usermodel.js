import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,

    },
    number:{
        type:Number,
        default:999999,
    },
    password:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
        required:true,
    }
});


const User=mongoose.model("User",userSchema);
export default User;