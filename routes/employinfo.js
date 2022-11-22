import { getData,getDatabyid,createData,updateData,deleteData} from "../controlers/employ.js";
import express from "express";
import protect from "../middleware/authmiddle.js";

const router=express.Router();


router.get("/",getData);
router.get("/:_id",getDatabyid)
router.post("/", protect,createData)
router.put("/:_id", protect,updateData)
router.delete("/:_id", protect,deleteData)
export default router