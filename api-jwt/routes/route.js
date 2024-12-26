const express= require("express");
const jwtctl= require("../controller/jwtctl")


const route = express.Router()

route.get("/",jwtctl.viewData)
route.post("/registaration",jwtctl.registration);
route.post("/login",jwtctl.login)


module.exports=route


