const express = require ("express");
const port = 1700;
const path= require("path");
const fs = require("fs")


const app = express();
const db =require("./config/db")
const admin = require("./config/schema");
const multer = require("multer");   

const Storage= multer.diskStorage({
    destination:(req,file,cb)=>{
        cb (null,"upload/")
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname +"-"+ Date.now())
    }
})
const upload = multer({storage:Storage}).single("image");

app.use("/upload",express.static(path.join(__dirname,"upload")));

app.set("view engine" , "ejs");
app.use(express.urlencoded());

app.get("/", async  (req,res)=>{
    let data = await admin.find({});
    res.render("home",{data});

})
app.post("/send" , upload , async (req,res)=>{
    req.body.image = req.file.path
    let data = await admin.create(req.body);
    data && res.redirect("/")
    console.log(res.body);
})
app.get("/edit", async (req,res)=>{
    let data= await admin.findById(req.query.id);
    data && res.render("edit",{data});
})
app.get("/delete", async (req,res)=>{
    let singleData = await admin.findById(req.query.id)
    fs.unlinkSync(singleData.image)
    let data = await admin.findByIdAndDelete(req.query.id);
    data && res.redirect("/")
})

app.post("/update",upload,async(req,res)=>{
    let singleData = await admin.findById(req.body.id)
    let img = ""
    req.file ? img = req.file.path : img = singleData.image
    req.file && fs.unlinkSync(singleData.image);
    req.body.image = img
    let data = await admin.findByIdAndUpdate(req.body.id,req.body)
    data && res.redirect("/")
})



app.listen(port,(err)=>{
    err ? console.log(err) : console.log("start"+ port);
})


