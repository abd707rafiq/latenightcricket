const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  
  date: { type: Date, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  
  
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports=Booking;
