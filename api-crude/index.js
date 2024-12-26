const express = require("express");
const port = 8000;
const path = require("path")

const db = require("./config/db")

const app = express();
app.use(express.urlencoded());
app.use("/",require("./routes/route"));
app.use("/upload",express.static(path.join(__dirname,"upload")));



app.listen(port,(err)=>{
    err ? console.log(err) : console.log("server start" + port);
})
