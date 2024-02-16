const express = require('express');
const router = express.Router();
const {makeBooking} = require('../controllers/Booking');

// Make a new booking
router.post('/ground/:id/makebooking', makeBooking);

module.exports = router;