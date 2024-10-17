const mongoose =require("mongoose");

const schema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true

    },
})

let admin = mongoose.model("crude",schema);

module.exports=admin;

