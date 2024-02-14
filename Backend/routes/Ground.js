const express=require('express');
const router= express.Router();
const {addGround}=require('../controllers/Ground');
const {isManager}=require('../middleware/Manager')

router.post("/addground",addGround);



// test api


module.exports = router;