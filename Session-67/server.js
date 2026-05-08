const express=require('express');
const app=express()



const productsRoutes = require("./router/product.router");

const userRoutes=require('./router/authentication.router')


app.use(express.json());  //middlware  statement

app.use("/jack", productsRoutes);

app.use("/rose", userRoutes);


app.listen(3000,()=>
{
    console.log('Server is running')
})