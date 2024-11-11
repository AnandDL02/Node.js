const multer = require("multer");

const Datastorage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads/")
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname + "-" + Date.now())
    }
})

const upload = multer({storage:Datastorage}).single("image");

module.exports=upload;
