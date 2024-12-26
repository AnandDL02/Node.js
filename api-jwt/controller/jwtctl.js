const admin= require("../model/schaema");
const bcryptjs= require("bcryptjs");
const jwt = require("jsonwebtoken")


module.exports.viewData=(req,res)=>{
    res.status(200).json({msg:"data add"});

}
module.exports.registration = async (req,res)=>{
    req.body.password = await bcryptjs.hash(req.body.password,10)
     await admin.create(req.body).then((data)=>{
        res.status(200).json({msg:data})
     })
}

module.exports.login = async (req,res)=>{
    let user = await admin.findOne({email:req.body.email})
    console.log(user);
    if (user) {
        if (await bcryptjs.compare(req.body.password,user.password)) {
            let token = jwt.sign({userData: user},"rnw",{expiresIn:"1h"});
            token &&
            res.status(200).json({msg:"usre login succesfull",token:token});
        } else{
            res.status(400).json({msg:"password is rong"});
        }
    
    } else{
        res.status(400).json({msg:"user not found "})
    }
};

