
const mongoose=require("mongoose");

const schema = mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    
    subject:{
        type:String,
        required:true
    },
    mark:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }

})

const admin =mongoose.model("cruddemo",schema)

module.exports = admin;

