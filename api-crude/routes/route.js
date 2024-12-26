const express=require("express");
const route=express.Router();
const indexctl=require("../controller/indexctl")
const multer = require("../multer/multer")



route.get("/",indexctl.addData)
route.post("/sendData",multer,indexctl.sendData);
route.delete("/deleteData",indexctl.deleteData);
route.put("/updateData",multer,indexctl.updateData);




module.exports = route;