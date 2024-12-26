const mongoose= require("mongoose");

let smitali=mongoose.Schema(
    {
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
    }
)

let Schema = mongoose.model("api",smitali);

module.exports = Schema;
