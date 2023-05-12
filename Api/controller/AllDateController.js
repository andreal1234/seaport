const { AccountModel } = require("../Model/AccountModel")
const { AllconsignmentModel } = require("../Model/AllConsignment")
const { AllDateModel } = require("../Model/AllDateData")
const { ConsignmentModel } = require("../Model/ConsignmentModel")


exports.newAlldate = async (req, res) => {
    const sameData = await AllDateModel.findOne({consignmentId:req.body.consignmentId})
    const account = await AccountModel.findOne({consignmentId:req.body.consignmentId})
   
    const {consignmentId,
    vesseletadate,
    igm,
    vessearr,
    drop,
    doc,
    dischange,
    reasons,
    heave,
    pilot,
    free,
    arrived,
    pilotchanged,
    LEFTLOCKGATEBBJ,
    ARRIVEDTOBERTH,
    PRIORENTRYWITHCUSTOMS,
    FINALENTRYWITHCUSTOMS,
    NOTICEOFREADINESSTENDEREDBYSHIP,
    NOTICEOFREADINESSACCEPTED,
    FIRSTLINEATBERTH,
    ALLFASTABERTH,
    GANGWAYPLACEDATBERTH,
    ALLCREWTHERMALCHECKINGCOMPLETED,
    ALLCARGOCONCERNONBOARD,
    COMMENCEDULLAGINGSAMPLINGCALCN,
    COMPLETEDULLAGING,
    CUSTOMSONBOARD,
    CUSTOMSCLEARED,
    SAFETYMEETINGCOMMENCED,
    SAFETYMEETINGCOMPLETED,
    RECEIVERNAME,
    CARGOTYPE,
    CARGOQUANTITY,
    LOADPORTCARGOQUANTITY,
    QUANTITYINONARRIVAL,
    QUANTITYINDISCHARGED,
    HOSECONNECTION,
    COMMENCEDDISCHARGE,
    COMPLETEDDISCHARGE,
    COMMENCEDAIRBLOWING,
    COMPLETEDAIRBLOWING,
    HOSEDISCONNECTION,
    COMMENCEDTANKINSPECTION,
    COMPLETEDTANKINSPECTION,
    DOCUMENTATIONCOMPLETED,
    HAULEDOUTFROBERTH,
    ARRIVEDLOCKGATE,
    PILOTCHANGE,
    LEFTLOCKGATE,
    PILOTDISEMBARKED,
    DELAYSFROM,
    DELAYSTO,
    REASONS} = req.body;
    if(account){
     if(sameData){
        const allDateupdate = await AllDateModel.findByIdAndUpdate(sameData._id,{vesseletadate,
            igm,
            vessearr,
            drop,
            doc,
            dischange,
            reasons,
            heave,
            pilot,
            free,
            arrived,
            pilotchanged,
            LEFTLOCKGATEBBJ,
            ARRIVEDTOBERTH,
            PRIORENTRYWITHCUSTOMS,
            FINALENTRYWITHCUSTOMS,
            NOTICEOFREADINESSTENDEREDBYSHIP,
            NOTICEOFREADINESSACCEPTED,
            FIRSTLINEATBERTH,
            ALLFASTABERTH,
            GANGWAYPLACEDATBERTH,
            ALLCREWTHERMALCHECKINGCOMPLETED,
            ALLCARGOCONCERNONBOARD,
            COMMENCEDULLAGINGSAMPLINGCALCN,
            COMPLETEDULLAGING,
            CUSTOMSONBOARD,
            CUSTOMSCLEARED,
            SAFETYMEETINGCOMMENCED,
            SAFETYMEETINGCOMPLETED,
            RECEIVERNAME,
            CARGOTYPE,
            CARGOQUANTITY,
            LOADPORTCARGOQUANTITY,
            QUANTITYINONARRIVAL,
            QUANTITYINDISCHARGED,
            HOSECONNECTION,
            COMMENCEDDISCHARGE,
            COMPLETEDDISCHARGE,
            COMMENCEDAIRBLOWING,
            COMPLETEDAIRBLOWING,
            HOSEDISCONNECTION,
            COMMENCEDTANKINSPECTION,
            COMPLETEDTANKINSPECTION,
            DOCUMENTATIONCOMPLETED,
            HAULEDOUTFROBERTH,
            ARRIVEDLOCKGATE,
            PILOTCHANGE,
            LEFTLOCKGATE,
            PILOTDISEMBARKED,
            DELAYSFROM,
            DELAYSTO,
            REASONS})
        res.status(200).send(allDateupdate)
    }else{
        const alldate = await AllDateModel.create(req.body)
        res.status(200).send(alldate)
    }
}else{
    res.status(400).send("Account not added")
}

}

exports.TimeData = async(req,res)=>{
    const id=req.params.id;
    const datedata = await AllDateModel.findOne({consignmentId:id})
    res.status(200).send( datedata);
}

// exports.viewAllconsignmenteta = async(req,res)=>{
//     try{
//         const view = await AllconsignmentModel.find({ETBComplete:true,pdaComplete:false}).populate({
//             path: "consignmentId",
            
//         }).populate({ path: "accountId" })
//         res.status(200).send(view)
//     }catch(error){
//         res.status(400).send("Error Occured")
//     }
// }

// exports.viewAllconsignmentetatrue = async(req,res)=>{
//     try{
//         const view = await AllconsignmentModel.find({ETBComplete:true,pdaComplete:true}).populate({
//             path: "consignmentId",
            
//         }).populate({ path: "accountId" })
//         res.status(200).send(view)
//     }catch(error){
//         res.status(400).send("Error Occured")
//     }
// }

// exports.viewAllconsignment = async(req,res)=>{
//     try{
//         const view = await AllconsignmentModel.find().populate("consignmentId")
//         res.status(200).send(view)
//     }catch(error){
//         res.status(400).send("Error Occured")
//     }
// }

// exports.deleteAllconsignment=async(req,res)=>{
//     try{
//     const Allconsignment = await AllconsignmentModel.findByIdAndRemove({_id:req.params.id})
//     res.status(200).send(Allconsignment)
//     }catch(err){
//         res.status(400).send("error")
//     }
// }

// exports.viewOneAllconsignment=async(req,res)=>{
// try{
//     const id=req.params.id
//     const consign = await AllconsignmentModel.findOne({_id:id}).populate("consignmentId")
//     res.status(200).send(consign)
//     }catch(err){
//         res.status(400).send("error")
//     }
// }

// exports.UpdateAllconsignment=async(req,res)=>{
//     try{
//     const id=req.params.id;
//     const { etas,ETB,Timing,recivername,cargotype,cargoquantity} = req.body;
//     if(Timing){
//         const Allconsignment = await AllconsignmentModel.findByIdAndUpdate(id,{etas,ETB,Timing,recivername,cargotype,cargoquantity,pdaComplete:true});
//         res.status(200).send(Allconsignment)
//     }else{
//         const Allconsignment = await AllconsignmentModel.findByIdAndUpdate(id,{etas,ETB,Timing,recivername,cargotype,cargoquantity,});
//         res.status(200).send(Allconsignment)
//     }
//     }catch(error){
//         res.status(400).send("error Occur")
//     }
// }
