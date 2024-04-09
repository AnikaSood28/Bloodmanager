const express=require('express')
const authMiddleware = require('../middleware/authMiddleware')
const { createInventoryController, getInventoryController,  getHospitalController, getOrgnaisationController, getOrgnaisationForHospitalController, getDonorController, getInventoryHospitalController, getRecentInventoryController } = require('../controllers/inventoryController')
const router=express.Router()
router.post('/create-inventory',authMiddleware,createInventoryController)
router.get('/get-inventory',authMiddleware,getInventoryController)
router.get('/get-donor',authMiddleware,getDonorController)
router.get("/get-hospitals", authMiddleware, getHospitalController);

//GET orgnaisation RECORDS
router.get("/get-orgnaisation", authMiddleware, getOrgnaisationController);
router.post(
  "/get-inventory-hospital",
  authMiddleware,
  getInventoryHospitalController
);
router.get(
  "/get-recent-inventory",
  authMiddleware,
  getRecentInventoryController
);
//GET orgnaisation RECORDS
router.get(
  "/get-orgnaisation-for-hospital",
  authMiddleware,
  getOrgnaisationForHospitalController
);

module.exports = router;