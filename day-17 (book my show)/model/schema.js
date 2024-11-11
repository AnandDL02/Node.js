const mongoose=require("mongoose")
const schema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    rating:{
        type:String,
        required:true
    },

})
 let admin =mongoose.model("mvcsetup",schema);

 module.exports=admin;
 
