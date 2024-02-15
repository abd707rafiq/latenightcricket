const express=require('express');
const router= express.Router();
const {addGround, getAllGrounds, getGroundById, updateGroundById}=require('../controllers/Ground');
//const {isManager}=require('../middleware/Manager')
//const {authenticateUser}=require('../middleware/AuthenticatedUser')
router.get("/allgrounds",getAllGrounds);
router.post("/addground", addGround);
router.get("/ground/:id",getGroundById);
router.post('/update/:id',updateGroundById);








module.exports = router;