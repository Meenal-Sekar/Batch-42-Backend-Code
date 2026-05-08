
const express=require('express')
// router level middleware
const router=require('express').Router()

const userData=require('../data/userData')



router.get("/",(req,res)=>
{
        res.json(userData)  //100 records will be display
        res.send('10 records will be display')
})


router.get("/:id",(req,res)=>
    {
        const data1=userData.find((u1)=>u1.id == req.params.id); //url 7
        res.json(data1);

    
    })

module.exports=router;