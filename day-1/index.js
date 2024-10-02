
const http = require("http");
const port = 8000;

const porthandler =(req,res)=>{
    req.write(" <h1> welcome to server </h1>");
    res.end();

}
let server = http.createServer(porthandler);

server.listen(port,(err)=>{
    err ? console.log(err) :console.log("server strated on port "+ port);

})