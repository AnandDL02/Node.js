const express = require("express");
const port = 1200;
const db = require("./config/db");
const path =require("path");



const app=express();
app.set("view emgine","ejs");
app.use(express.urlencoded()); 

app.use("/",require("./routes/route"));
app.use("/uploads",express.static(path.join(__dirname,"uploads")));


app.listen(port,(err)=>{
    err ? console.log(err) : console.log("start server",port);
    
    
})



