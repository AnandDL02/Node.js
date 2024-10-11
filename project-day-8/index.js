const express = require("express");
const path = require("path")
const port = 1221;

const app = express();

app.set("view engine","ejs");
app.use("/public",express.static(path.join(__dirname,"public")));


app.get("/",(req,res)=>{
    res.render("index");
})

app.get("/menu",(req,res)=>{
    res.render("menu");

})

app.get("/book",(req,res)=>{
    res.render("book");

})

app.get("/about",(req,res)=>{
    res.render("about");
    
})

app.listen(port,(err)=>{
    err ? console.log(err) : console.log(`start server`,`${port}`);    
})



