const mongoose = require('mongoose');

const groundSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  facilities: [{ type: String }],
  price: { type: Number, required: true },
  contactInfo: { type: String, required: true },
  manager: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

 const Ground= mongoose.model('Ground', groundSchema);
 module.exports=Ground;
