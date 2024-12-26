const schama = require("../model/schama");
const admin=require("../model/schama");
const fs = require("fs")
const bcrypt = require("bcrypt");


module.exports.addData = async(req,res)=>{
    await admin.find({}).then((data)=>{
        res.status(200).json({msg:"first data",info:data})
    })
}
module.exports.sendData = async (req,res)=>{
    req.body.Image = req.file.path
    await admin.create(req.body).then((data)=>{
        res.status(200).json({msg : "data added succesfully"})
    })
}

module.exports.deleteData = async (req,res)=>{
    await admin.findByIdAn/dDelete(req.query.id).then((data)=>{
        fs.unlinkSync(deleteData.image);
        res.status(200).json({msg:"delete data"})
    })

}
module.exports.updateData = async (req,res)=>{
    await admin.findByIdAndUpdate(req.query.id,req.body).then((data)=>{
        res.status(200).json({msg:"data is upadate"})
    })
}

module.exports.imageData = async (req,res)=>{
    let img ="";
    let update = await schama.findById(req.body.id)
    req.file ? img = req.file.path : img =update.imageData
    req.file && fs.unlinkSync (update.imageData);
    req.body.imageData=img
    let data = await schama.findByIdAndUpdate(req.body.id,req.body)
    data && res.redirect("/") 
}
