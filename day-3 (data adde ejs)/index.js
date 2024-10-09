
const express = require("express");
const port =1880;


const app = express();

const student=[
    {
        id:1,
        name:"smit",
        sub:"react",
        city:"rajkot"
    },
    {
        id:2,
        name:"smit",
        sub:"react",
        city:"rajkot"
    },
    {
        id:3,
        name:"smit",
        sub:"react",
        city:"rajkot"
    },
    {
        id:4,
        name:"smit",
        sub:"react",
        city:"rajkot"
    },

]

app.set("view engine","ejs")
app.use(express.urlencoded());


app.get("/",(req,res)=>{
    res.render("index",{student})
})

app.post("/action",(req,res)=>{
    console.log(req.body);
    res.redirect("/")
    
})

app.listen(port,(err)=>{
    err ? console.log(err) : console.log(`server ${port} `)
})