const mongoose = require("mongoose");

const DummyBlSchema = new mongoose.Schema({
        vesselOwner:{ type: String },
        blNo:{ type: String },
        blDate:{ type: String },
        blQuantity:{ type: String },
        typeloi:{ type: String },
        otherDoc:{ type: String },
        orgloi:{ type: String },
        orgblrecd:{ type: String },
        copyofbl:{ type: String },
        bgreturned:{ type: String },
        blreturn:{ type: String },
        couriesNo:{ type: String },
        remarks:{ type: String },   
})
const DummyBlModel = new mongoose.model("DummyBl", DummyBlSchema);
module.exports = {DummyBlModel};