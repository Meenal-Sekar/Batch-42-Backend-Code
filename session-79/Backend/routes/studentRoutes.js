const express=require('express')

const router=express.Router()

const Student=require('../model/Student')  // reference from model folder 

// how to create a new record

// Create
router.post("/", async (req,res)=>{
    const student =
    await Student.create(req.body);

    res.json(student);
});

// Read
router.get("/", async(req,res)=>{
    const students =
    await Student.find();

    res.json(students);
});


//update

// Update

router.put("/:id", async(req,res)=>{
    const student =
    await Student.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
})


router.delete("/:id", async(req,res)=>{
    await Student.findByIdAndDelete(
        req.params.id
    );

    res.json({
        message:"Deleted Successfully"
    });
});


module.exports=router
