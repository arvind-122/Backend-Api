import Employinfo from "../models/EmployinfoModel.js";

const getData=async(req,res)=>{
   try { let result =await Employinfo.find();
    res.send(result)
    
   } catch (error) {
    res.send({error:error.message})
   }

};
const getDatabyid=async(req,res)=>{
    try{
        let {_id}=req.params;
    let result =await Employinfo.findById({_id});
    res.send(result)
    }catch (error) {
        res.send({error:error.message})
       }

};
//creating new data

const createData =async (req,res) => {
    try{let data=req.body;

        let result= await Employinfo.create(data);
        res.send(result);}catch (error) {
            res.send({error:error.message})
           }
    }
//update data
   const updateData =async (req,res) => {
  try {  let {_id}=req.params;
  let data=req.body;
  let result=await Employinfo.updateOne({_id},{$set:data});
  res.send(result);
    
  } catch (error) {
    res.send({error:error.message})
    
  }
   };
// delete data
   const deleteData = async (req,res) => { let {_id}=req.params;
     
  try { let result=await Employinfo.deleteOne({_id});
  res.send(result);
    
  } catch (error) {
    res.send({error:error.message})
    
  }
};
export {getData,getDatabyid,createData,updateData,deleteData};