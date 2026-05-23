const express = require("express");

const router = express.Router();   //middlewares


const {createStudent,getStudents,updateStudent,deleteStudent}=require('../controllers/studentControllers')

router.post("/",createStudent)
router.get("/", getStudents)
router.put("/:id",updateStudent);
router.delete("/:id",deleteStudent);

module.exports=router;

