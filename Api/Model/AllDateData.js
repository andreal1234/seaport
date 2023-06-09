const mongoose = require("mongoose");

const AllDateSchema = new mongoose.Schema({
        consignmentId:{ type:mongoose.Schema.Types.ObjectId,ref:"consignment"},
        vesseletadate:{ type: Date },
        igm:{ type: Date },
        vessearr:{ type: Date },
        drop:{ type: Date },
        doc:{ type: Date },
        dischange:{ type: Date },
        reasons:{ type:String },
        heave:{ type: Date },
        pilot:{ type: Date },
        free:{ type: Date },
        arrived:{ type: Date },
        pilotchanged:{ type: Date },
        LEFTLOCKGATEBBJ:{ type: Date },
        ARRIVEDTOBERTH:{ type: Date },
        PRIORENTRYWITHCUSTOMS:{ type: Date },
        FINALENTRYWITHCUSTOMS:{ type: Date },
        NOTICEOFREADINESSTENDEREDBYSHIP:{ type: Date },
        NOTICEOFREADINESSACCEPTED:{ type: Date },
        FIRSTLINEATBERTH:{ type: Date },
        ALLFASTABERTH:{ type: Date },
        GANGWAYPLACEDATBERTH:{ type: Date },
        ALLCREWTHERMALCHECKINGCOMPLETED:{ type: Date },
        ALLCARGOCONCERNONBOARD:{ type: Date },
        COMMENCEDULLAGINGSAMPLINGCALCN:{ type: Date },
        COMPLETEDULLAGING:{ type: Date },
        CUSTOMSONBOARD:{ type: Date },
        CUSTOMSCLEARED:{ type: Date },
        SAFETYMEETINGCOMMENCED:{ type: Date },
        SAFETYMEETINGCOMPLETED:{ type: Date },
        RECEIVERNAME:{ type: String },
        CARGOTYPE:{ type: String },
        CARGOQUANTITY:{ type: String },
        LOADPORTCARGOQUANTITY:{ type: String },
        QUANTITYINONARRIVAL:{ type: String },
        QUANTITYINDISCHARGED:{ type: String },
        HOSECONNECTION:{ type: Date },
        COMMENCEDDISCHARGE:{ type: Date },
        COMPLETEDDISCHARGE:{ type: Date },
        COMMENCEDAIRBLOWING:{ type: Date },
        COMPLETEDAIRBLOWING:{ type: Date },
        HOSEDISCONNECTION:{ type: Date },
        COMMENCEDTANKINSPECTION:{ type: Date },
        COMPLETEDTANKINSPECTION:{ type: Date },
        DOCUMENTATIONCOMPLETED:{ type: Date },
        HAULEDOUTFROBERTH:{ type: Date },
        ARRIVEDLOCKGATE:{ type: Date },
        PILOTCHANGE:{ type: Date },
        LEFTLOCKGATE:{ type: Date },
        PILOTDISEMBARKED:{ type: Date },
        DELAYSFROM:{ type: Date },
        DELAYSTO:{ type: Date },
        REASONS:{ type: String }
       
})

const AllDateModel = new mongoose.model("alldate",AllDateSchema);
module.exports = {AllDateModel};
