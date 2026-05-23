
const mongoose=require('mongoose')


//what is schema?  It is database structure
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    location:String,
    
})
const UserModel=mongoose.model("user_Record",userSchema)

module.exports=UserModel
