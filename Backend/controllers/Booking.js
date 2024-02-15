const Booking=require('../models/Booking');
const Ground=require('../models/Ground');

const makeBooking=async (req,res)=>{
    try{
        const {groundId,date,startTime,endTime}=req.body;

    }
    catch(error){
        console.log('errorin booking',error)
        res.status(400).json({message:error.message});
    }
}