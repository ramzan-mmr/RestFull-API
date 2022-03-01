
const mongoose = require("mongoose")
const DB = "mongodb://localhost:27017/employee"
mongoose.connect(DB).then(() => {
    console.log("connection is successfully setup..")
}).catch((e)=>{
    console.log(e);
    console.log("connection is not build...");
});