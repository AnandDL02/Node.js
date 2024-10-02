

const http = require ("http");
const port = 8000;

const porthandler=(req,res)=>{
    res.write("<h1> welcome server user  </h1>")
    res.end();

}
let server =http.createServer(porthandler);

server.listen(port,(err)=>{
    err ? console.log(err) : console.log("start server" +port);

})