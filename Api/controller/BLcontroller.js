const { BlModel } = require("../Model/BlModel");
const { BlAllModel } = require("../Model/BlModelAll");

exports.addnewbl = async (req, res) => {
    try {
        const {portname,
            vesselname,
            eta,
            arrivetime,
            berthed,
            sailed,
            agent,
            consignee,
            product,
            quantity,
            shipper,
            loadPort,
            dayoversail,
            } = req.body;
        const data = await BlModel.create({
            portname,
            vesselname,
            eta,
            arrivetime,
            berthed,
            sailed,
            agent,
            consignee,
            product,
            quantity,
            shipper,
            loadPort,
            dayoversail,
        })
        res.status(200).send(data)
    } catch (err) {
        res.status(400).send("error")
    }
}

exports.allbl=async(req,res)=>{
    try{
    const port = await BlModel.find({}).sort({_id: -1})
    res.status(200).send(port)
    }catch(err){
        res.status(400).send("error")
    }
}

exports.onebl=async(req,res)=>{
    try{
    const port = await BlModel.findOne({_id:req.params.id})
    res.status(200).send(port)
    }catch(err){
        res.status(400).send("error")
    }
}

exports.updateBl = async(req,res)=>{
    try{
        const id=req.params.id;
        const customer = await BlModel.findByIdAndUpdate(id,req.body);
        res.status(200).send(customer)
    }catch(err){
        res.status(400).send("error")
    }
}

exports.viewOneBl=async(req,res)=>{
    try{
    const bl = await BlAllModel.findOne({_id:req.params.id}).populate("blAdmin")
    res.status(200).send(bl)
    }catch(err){
        res.status(400).send("error")
    }
}
exports.viewOneUpdateBl=async(req,res)=>{
    console.log(req.body);
    try{
    const id=req.params.id;
    const customer = await BlModel.findByIdAndUpdate(req.body.data._id,req.body.data);
    const customer1 = await BlAllModel.findByIdAndUpdate(id,req.body.bldata);
    res.status(200).send(customer1)
    }catch(err){
        res.status(400).send("error")
    }
}
