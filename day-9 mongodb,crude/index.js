const express = require("express");
const port= 1900;
const path=require("path")

const app = express();
const db=require("./config/db")
const admin =require("./config/schama");

app.set("view engine","ejs");
app.use(express.urlencoded())
app.use("/public",express.static(path.join(__dirname,"public")));



app.get("/", async(req,res)=>{
    let data = await admin.find({})
     res.render("home",{data});
})

app.post("/send", async(req,res)=>{
    let data = await admin.create(req.body)
    data && res.redirect("/")
    console.log(req.body);
})
app.get("/delete",async(req,res)=>{
    let data = await admin.findByIdAndDelete(req.query.id)
    data && res.redirect("/");
})

app.get("/edit",async(req,res)=>{
    let data = await admin.findById(req.query.id);
    data && res.render("edit",{data});
})

app.post("/update",async(req,res)=>{
    let data = await admin.findByIdAndUpdate(req.body.id,req.body);
    data && res.redirect("/");
})


app.listen(port,(err)=>{
    err ? console.log(err) : console.log("server" , + port);
    
    
})
