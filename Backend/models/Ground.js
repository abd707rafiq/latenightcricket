const mongoose = require('mongoose');
const Booking=require('./Booking')

const groundSchema = new mongoose.Schema({
  ground_name: {
      type: String,
      required: [true, "Name is required"],
  },
  location: {
      type: String,
      required: [true, "location is required"],

  },
  description: {
      type: String,
      required: [true, "description is required"],
  },
  price: {
      type: Number,
      required: [true, "price is required"],
  },
  published: {
      type: Boolean,
      required: [true, "required"],
  },
  coordinates: {
      latitude: {
          type: String,
          required: [true, "required"],
      },
      longitude: {
          type: String,
          required: [true, "required"],
      },
  },
  availableSlots: [String],
  images: [String],
  bookings: [Booking]
});

 const Ground= mongoose.model('Ground', groundSchema);
 module.exports=Ground;
