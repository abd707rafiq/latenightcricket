const express=require('express');

const router=express.Router();
const {signUp,signIn}=require('../controllers/Auth')

router.post("/signup",signUp);
router.post("/signin",signIn);


// test api


module.exports = router;