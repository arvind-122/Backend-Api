import mongoose from 'mongoose';
const employinfoSchema =mongoose.Schema({
    employ_name: {
        type:"string",
        minLength:3,
        maxLength:20,
        required:true
    },
    joiningdate:{
        type:"string",
        required:true,
    },
    dateofbirth:{
        type:"string",
        required:true
    },
    salary:{
        type:"number",
        required:true,
        minimum:1000,
        maximum:100000000,
    },
    role:{
        type:"string",
        required:true,
        minLength:10,
        maxLength:20,
    },
    department:{
        type:"string",
        enum:["finance","design","sales","developer"]
    },
   

});
const Employinfo =mongoose.model("Employinfo",employinfoSchema);
export default Employinfo;