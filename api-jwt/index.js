const express = require("express");
const port = 1008;
let db = require("./config/db");

const app = express();
app.use(express.urlencoded())
app.use("/",require("./routes/route"));


app.listen(port,(err)=>{
    err ? console.log(err) : console.log("start server" +port);
})
