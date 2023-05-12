const express = require("express");
const { newAllconsignment, viewAllconsignment, deleteAllconsignment, viewOneAllconsignment, UpdateAllconsignment, accountData, viewAllconsignmenteta, viewAllconsignmentetatrue } = require("../controller/Allconsignment");
const { newAlldate, TimeData } = require("../controller/AllDateController");
const router=express.Router();

router.post("/newallconsignment",newAllconsignment)
router.get("/allsconsignment",viewAllconsignment)
router.get("/oneconsignment/:id",viewOneAllconsignment)
router.get("/oneconsign/:id",viewOneAllconsignment)
router.delete("/:id",deleteAllconsignment)
router.put("/updateconsignment/:id",UpdateAllconsignment)


router.get("/viewAllconsignmenteta",viewAllconsignmenteta)
router.get("/viewAllconsignmentetatrue",viewAllconsignmentetatrue)

router.post('/alldate',newAlldate)
router.get('/timedata/:id',TimeData)



module.exports = router;