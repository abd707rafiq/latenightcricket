const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    userType: { type: String, enum: ['manager', 'customer'], required: true }

}, { timestamps: true });


const User = mongoose.model('User', userSchema);
module.exports = User;