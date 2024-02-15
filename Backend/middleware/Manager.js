

const isManager = (req, res, next) => {
  console.log("req.user:", req.user);
    if (req.user && req.user.userType === 'manager') {
      next();
    } else {
      return res.status(403).json({ message: 'Only managers can perform this action' });
    }
  };
 module.exports={isManager};