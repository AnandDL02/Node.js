const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1/CrudProject");

let db = mongoose.connection;

db.once("open",(err)=>{
    err ? console.log(err) : console.log("bd started");
})

module.exports=db;