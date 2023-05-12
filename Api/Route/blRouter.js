const express = require("express");
const { addnewbl, allbl, viewOneBl, viewOneUpdateBl, onebl, updateBl } = require("../controller/BLcontroller");
const { allbladded, alladdedfinds, alladdedbl, allBlOne, allupdateBl, dummyBl, dummyBlFind } = require("../controller/AllBlController");
const router=express.Router();

router.post("/newbl",addnewbl)
router.get("/allbl",allbl)
router.get("/onebl/:id",onebl)
router.put("/updatebl/:id",updateBl)
router.post("/newAllbl",allbladded)
router.get("/blAddedFind/:id",alladdedfinds)
router.get("/allBlOne/:id",allBlOne)
// updateBl
// router.get("/onebl/:id",viewOneBl)
router.put("/allupdateBl/:id",allupdateBl)
router.post("/dummyBl",dummyBl)
router.get("/dummyBlFind",dummyBlFind)
// router.get("/alladdedbl",alladdedbl)

module.exports = router;