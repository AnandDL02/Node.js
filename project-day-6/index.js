const express = require("express");
const port=1101;

const app= express();

app.set("view engine","ejs");
app.use(express.urlencoded());

let student=[
    {
        id:1,
        name:"shyam",
        city:"valsad"
    },
    {
        id:2,
        name:"ram",
        city:"vapi"
    },
    {
        id:3,
        name:"ramushyamu",
        city:"diu"
    },
    {
        id:4,
        name:"raju",
        city:"rajkot"
    },

]

app.get("/",(req,res)=>{
        res.render("index",{student});

})

app.post("/home",(req,res)=>{
    req.body.id=student.length+1;
    student.push(req.body)
    console.log(res.body);
    res.redirect("/")
    
})

app.get("/delete",(req,res)=>{
    let data = student.filter((item)=> item.id != req.query.Id);
    student = data;
    res.redirect("/")
})

app.get("/edit",(req,res)=>{
    let singledata=student.find((item)=>item.id == req.query.Id);
    singledata ? res.render("edit",{singledata}):
    console.log(err);

})

app.post("/update",(req,res)=>{
    student.map((e,i)=>{
        if (e.id==req.query.Id) {
            e.id==req.query.Id,
            e.name=req.body.name,
            e.city=req.body.city

        } else{
            e
        }
    })
    res.redirect("/")
})


app.listen(port,(err)=>{
    err ? console.log(err) : console.log(`start server ${port}`);
    
    
})