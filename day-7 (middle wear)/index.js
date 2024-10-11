const experss = require("express")
const path = require("path")
const port = 1001;

const app = experss();

app.set("view engine","ejs");
app.use(experss.urlencoded());
app.use("/public",experss.static(path.join(__dirname,"public")));


let student = [
    {
      id:1,
      name:"shyam",
      age: 12,
      subject:"react"   
    },
    {
        id:2,
        name:"ram",
        age: 13,
        subject:"tee"   
    },
    {
        id:3,
        name:"jay",
        age: 14,
        subject:"bba"   
    },
    {
        id:4,
        name:"dipak",
        age: 15,
        subject:"sir"   
    },

]

const middle=(req,res,next)=>{
    let age=  req.body.age;
    if (age>=18) {
        next();

    } else {
        res.redirect("/");

    }
}

app.get("/",(req,res)=>{
    res.render("home")

})
app.post("/home", middle , (req,res)=>{
    console.log(req.body);
    res.render("edit",{student});
    res.redirect("/edit");
})


app.listen(port,(err)=>{
   err ? console.log(err) : console.log(`start server`,`${port}`);
    
    
})