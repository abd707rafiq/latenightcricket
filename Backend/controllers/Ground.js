const Ground = require('../models/Ground');

// Add a new ground listing
const addGround = async (req, res) => {
  try {
    const { name, location, facilities, price, contactInfo} = req.body;
    const newGround = await Ground.create({
      name,
      location,
      facilities,
      price,
      contactInfo,
        // Assign the manager ID from the authenticated user
    });
    res.status(201).json({ ground: newGround });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports={addGround};