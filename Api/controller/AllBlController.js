const { promises } = require("nodemailer/lib/xoauth2");
const { BlModel } = require("../Model/BlModel");
const { BlAllModel } = require("../Model/BlModelAll");
const { DummyBlModel } = require("../Model/DummyBl");

exports.allbladded =async(req,res)=>{
    try{
   await req.body.inputlist.map(async(data)=>{
        var BLdata= await BlAllModel.create({
            blAdmin:req.body.id,
            vesselOwner:data.vesselOwner,
            blNo:data.blNo,
            blDate:data.blDate,
            blQuantity:data.blQuantity,
            typeloi:data.typeloi,
            otherDoc:data.otherDoc,
            orgloi:data. orgloi,
            orgblrecd:data.orgblrecd,
            copyofbl:data. copyofbl,
            bgreturned:data.bgreturned,
            blreturn:data.blreturn,
            couriesNo:data.couriesNo,
            remarks:data.remarks 
        });
   })
   res.status(200).send("sucess") 
}catch(err){
    res.status(400).send("err") 
} 

    }




exports.alladdedfinds =async(req,res)=>{
    try{
       const data = await BlAllModel.find({blAdmin:req.params.id}).populate("blAdmin");
        res.status(200).send(data) 
    }catch(err){
        res.status(400).send("error") 
    }
        
}

exports.allBlOne =async(req,res)=>{
    console.log(req.params.id);
    try{
       const data = await BlAllModel.findOne({_id:req.params.id}).populate("blAdmin");
        res.status(200).send(data) 
        console.log(data);
    }catch(err){
        res.status(400).send("error") 
    }
        
}


exports.allupdateBl =async(req,res)=>{
   const {vesselOwner,blNo,blDate,blQuantity,typeloi, otherDoc, orgloi, orgblrecd, copyofbl, bgreturned, blreturn, couriesNo, remarks}=req.body
    try{
        const data = await BlAllModel.findByIdAndUpdate(req.params.id,{vesselOwner,blNo,blDate,blQuantity,typeloi, otherDoc, orgloi, orgblrecd, copyofbl, bgreturned, blreturn, couriesNo, remarks})
        res.status(200).send(data) 
    }catch(err){
        res.status(400).send("error") 
    }
        
}


exports.dummyBl=async(req,res)=>{
    const data = await DummyBlModel.findOne({_id:req.body._id})
    if(data){
        const data = await BlAllModel.findByIdAndUpdate(data._id,req.body)
        res.status(200).send(data)
    }else{
        const dummybl = await DummyBlModel.create(req.body)
        res.status(200).send(dummybl)
    }
    
}
exports.dummyBlFind=async(req,res)=>{
        const dataBl = await BlAllModel.findOne().sort({_id:-1})
        res.status(200).send(dataBl)
   
    
}