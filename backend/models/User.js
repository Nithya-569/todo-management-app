const mongoose=require("mongoose");
const userSchema=new mangoose.Schema({
    name:String,
    email:String,
    password:String
});
module.exports=mongoose.model("User",userSchema);