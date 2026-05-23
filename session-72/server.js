const express=require('express')
const app=express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')

app.use(express.json()) // middleware

//dot env calling statement
dotenv.config()

//Database connection

const connectDB = require('./config/db')

connectDB();

const studentRouter=require('./router/studentRouter')

// ROUTES
app.use("/students", studentRouter);



// ERROR MIDDLEWARE
const middleware=require('./middleware/errorHandler')
app.use(middleware);

 const PORT = process.env.PORT 

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


// step 1 : PORT connection   5000 || env-port
// step 2 :  Database connection
// step 3:    Router connection  (model+controller)