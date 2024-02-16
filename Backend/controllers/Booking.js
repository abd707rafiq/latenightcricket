const Booking=require('../models/Booking');
const Ground=require('../models/Ground');

const makeBooking=async (req,res)=>{
    try{
        const {date,startTime,endTime}=req.body;
        const parsedDate = new Date(date);

        // Check if the parsed date is valid
        if (isNaN(parsedDate.getTime())) {
            return res.status(400).json({ message: 'Invalid date format' });
        }
        const isAvaliable= await groundAvaliability(parsedDate,startTime,endTime);
        if(!isAvaliable){
            res.status(400).json({message:'Ground is not avaliable on specific date and time'});
        }
        const newBooking= new Booking({date:parsedDate,startTime,endTime,});
        await newBooking.save();
        res.status(201).json({ message: 'Booking successful', booking: newBooking });

    }
    catch(error){
        console.log('errorin booking',error)
        res.status(400).json({message:error.message});
    }
}
const groundAvaliability = async ( date, startTime, endTime) => {
    // Check if there are any existing bookings for the specified date and time slot
    const existingBookings = await Booking.find({
        
        date,
        $or: [
            { $and: [{ startTime: { $lte: startTime } }, { endTime: { $gte: startTime } }] }, // Check if start time falls within an existing booking
            { $and: [{ startTime: { $lte: endTime } }, { endTime: { $gte: endTime } }] } // Check if end time falls within an existing booking
        ]
    });

    // If there are existing bookings, the ground is not available
    return existingBookings.length === 0;
};

module.exports = { makeBooking };
