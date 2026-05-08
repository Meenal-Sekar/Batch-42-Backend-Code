

const express=require('express')
// middleware
const router=require('express').Router()  //router-level middleware statement

const albumData=require('../data/albumData') //database


router.get("/",(req,res)=>
{
        res.json(albumData)  //100 records will be display
        res.send('100 records will be display')
})


router.get("/:id",(req,res)=>
    {
        const data1=albumData.find((u1)=>u1.id == req.params.id); //url 78
        res.json(data1);

    
    })

     router.get("/sk/:id",(req,res)=>
        {
        const data2=albumData.filter((u2)=>u2.userId==req.params.id);
        res.json(data2);
        });
module.exports=router;