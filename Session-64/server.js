const express=require('express')
const app=express();

//middleware statement
app.use(express.json());


let users = [
 { id: 1, name: "Meena",job:"Developer" },
 { id: 2, name: "John",  job:"Tester" },
 { id: 3, name: "seetha", job:"Admin" }
];

//get   get all users[] infomation
app.get("/getusers",(req,res)=>
{
        res.json(users);
        res.send('Retrieve the user details')
})

// ✅ POST - Add new user
app.post('/postusers', (req, res) => {
 const newUser = {
   id: users.length + 1,
   name: req.body.name,
   job:req.body.job
 };
 users.push(newUser);
 res.status(201).json(newUser);
 
});

//  delete

// ✅ DELETE - Remove user
app.delete('/getusers/:id', (req, res) => {
 users = users.filter(u => u.id != req.params.id);
 res.send("User record has deleted");
});



// ✅ PUT - Replace entire user

app.put('/getusers/:id',(req,res)=>
{
 const index = users.findIndex(u => u.id == req.params.id);

 if (index !== -1) 
{
   users[index] = { id: Number(req.params.id), name: req.body.name , job:req.body.job};
   res.json(users[index]);
 } else {
   res.status(404).send("User not found");
 }

})


//patch
// ✅ PATCH - Update partial data
app.patch('/getusers/:id', (req, res) =>
 {
 const user = users.find(u => u.id == req.params.id);

 if (user) 
{
   user.name = req.body.name || user.name;
   user.job=req.body.job || user.job;
   
   res.json(user);
 } 
 else
 {
   res.status(404).send("User not found");
 }
});



app.patch('/getusers/:id',(req,res)=>
{

})






app.listen(3001,()=>
{
    console.log('server is running on  the port 3001')
})