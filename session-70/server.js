const express=require('express')
const app=express()
const cors=require('cors')
const mongoose=require('mongoose')

app.use(express.json()) // middleware

// database connection
const S1=require('./model/people')

if(mongoose.connect('mongodb://127.0.0.1:27017/Batch-42-DB'))
    {
        console.log('database connected')
    }

//Add new records to collection
app.post("/insert",(req,res)=>
    {
    
        const people=new S1(req.body);  //get request information from reques area saved in kitty
        people.save().then(() =>{
         
            res.send("Data added successfully");
        }).catch((err)=>
        {
            res.json(err);
        });
    });


//Retrieve the records from DB

app.get("/retr",async(req,res)=>
        {
            try{
                const jack=await S1.find()    //get all details from table or collections
                res.json(jack); 
            }
            catch(err)
            {
                res.send(err)
            }
        
        })



app.delete("/delete/:id",async(req,res)=>
    {
    const kitty=await S1.findByIdAndDelete(req.params.id);
    res.json(kitty);//jack record  (deleted record)
    console.log('deleted');
    });



app.put("/update", async(req,res)=>
        {
        const user=await S1.findByIdAndUpdate(req.body.id,
        {
        name:req.body.name,
        email:req.body.email,
        age:req.body.age,
        location:req.body.location
        },
        {new:true}//accept the new details for s1
        
        );
        res.json(user);
        console.log("updated");
        });






app.listen(4000,()=>
{
    console.log('server is running')
})