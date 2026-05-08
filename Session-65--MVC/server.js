const express=require('express')

const app=express();

const albumRouter=require('./router/albumRouter');
const userRouter=require('./router/userRouter')



app.get("/",(req,res)=>
{
    res.sendFile(__dirname+"/html/index.html");

})


//app.use----> middleware(Applcation level middlware)
app.use("/rajini",albumRouter);
app.use("/kamal",userRouter);

app.listen(4000,()=>
{
    console.log('server is running');
})




//data--->router--->server.js