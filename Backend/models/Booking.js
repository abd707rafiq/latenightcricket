const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  groundId: { type: mongoose.Schema.Types.ObjectId, ref: 'Ground', required: true },
  date: { type: Date, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports=Booking;
