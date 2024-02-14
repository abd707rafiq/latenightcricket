
const User = require('../models/User')
const isManager = (req, res, next) => {
    if (req.User && req.User.userType === 'manager') {
      next();
    } else {
      return res.status(403).json({ message: 'Only managers can perform this action' });
    }
  };
 module.exports={isManager};