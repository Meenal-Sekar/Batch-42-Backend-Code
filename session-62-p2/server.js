const express=require('express')
const app=express()

//http methods    get post put  patch  delete

// route
app.get('/diva', (req, res) => {
   res.send("Hello World!!!!!!!!!!!!!!!!!!!!!");
});



app.listen(9000,()=>
{
    console.log('Server is running successfully')
})