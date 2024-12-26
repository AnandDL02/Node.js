const mongoose=require("mongoose");

const fschama = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    subject:{
        type:String,
        require:true
    },
    Image:{
        type:String,
        require:true
    },
})
let schama = mongoose.model("api",fschama)
module.exports=schama