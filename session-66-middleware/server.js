const express=require('express')
const app=express()

app.use(express.json());   //Builtin middleware
// Dummy data
let students = [
  { id: 1, name: "Meena" },
  { id: 2, name: "Hari" },
   { id: 3, name: "Seetha" },
  { id: 4, name: "Ramya" },
   { id: 5, name: "Rani" },
  { id: 6, name: "kala" },
   { id: 7, name: "Reena" },
  { id: 8, name: "Arunkumar" },
   { id: 9, name: "lalitha" },
  { id: 10, name: "prakash" }
];
//get method -- retreive all the record in the array
// retrieve one record from the array

// middleware is a function perform before the get and post method

const logger = (req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next();
};


app.use(logger);

app.get("/student",(req,res)=>
{
    res.json(students)
})

app.get("/student/:id",(req,res)=>
{
    const result = students.find(s => s.id == req.params.id);

    res.json(result)
})

// add a record id:11   name: "ramya"  router: newStudent

app.post("/newStudent",(req,res)=>
{
 try {
    const { id, name } = req.body;

    students.push({ id, name });
    res.status(201).json({ message: "Student added" });
    res.send('New student added')

  } 
  catch (err) 
  {
    next(err);
  }
})
//delete the record of 7  router del

app.delete("/del/:id",(req,res)=>
{
        students = students.filter(s => s.id != req.params.id);
  res.json({ message: "Deleted" });

})


// put---> permanant record change(replace)
//patch(Temporary record change)

app.put("/update/:id", (req, res) => {
  const id = req.params.id;
  students = students.map(s =>
    s.id == id ? { ...s, ...req.body } : s
  );
  res.json({ message: "Updated" });
});


app.listen(3000,()=>
{
    console.log('Server is connected')
})