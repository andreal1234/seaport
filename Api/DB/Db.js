const mongoose= require("mongoose");

const dbdata = ()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>console.log("DB connected successful"))
    .catch(()=>console.log("Sorry not connect DB"))
}
module.exports=dbdata;