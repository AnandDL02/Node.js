const express = require("express");
const route = express.Router()
const ctl = require("../controllers/indexCtl")

const upload=require("../middleware/mullter")

route.get("/",ctl.HomePage)
route.post("/insert",upload,ctl.adddata)
route.get("/delete",ctl.deleteData)
route.get("/edit",ctl.editdata)
route.post("/update",upload,ctl.updatedata)

module.exports = route;