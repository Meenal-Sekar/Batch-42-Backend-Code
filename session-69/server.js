const express=require('express')
const app=express()
const mongoose=require('mongoose')

app.use(express.json()) // middleware

const S1=mongoose.model('student_details',{name:String,city:String,age:Number,jobRole:String});

if(mongoose.connect('mongodb+srv://meenal-sekar:VishuVishu1805@cluster0.example.mongodb.net/userDB?retryWrites=true&w=majority'))
{
        console.log("Database is connected");
}



// add user_record 


//how to insert record in the mongodb

app.post("/adduser",(req,res)=>
    {
    
        const people=new S1(req.body);  //get request information from reques area saved in kitty
        people.save().then(() =>{
         
            res.send("Data added successfully");
        }).catch((err)=>
        {
            res.json(err);
        });
    });


//get the details from the database

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

// delete the record from database using id



app.delete("/delete/:id",async(req,res)=>
    {
    const kitty=await S1.findByIdAndDelete(req.params.id);
    res.json(kitty);//jack record  (deleted record)
    console.log('deleted');
    });

//update  

 app.put("/update", async(req,res)=>
        {
        const user=await S1.findByIdAndUpdate(req.body.id,
        {
        name:req.body.name,
        city:req.body.city,
        age:req.body.age,
        jobRole:req.body.jobRole
        },
        {new:true}//accept the new details for s1
        
        );
        res.json(user);
        console.log("updated");
        });

app.listen(3000,()=>
{
    console.log('Server is running on the port 3000');
})


