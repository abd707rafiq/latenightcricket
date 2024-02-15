const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authenticateUser = async (req, res, next) => {
    try {
        // Get the token from the request headers or cookies
        const token = req.headers.authorization || req.cookies.access_token;
        if (!token) {
            return res.status(401).json({ message: "Authorization token is missing" });
        }

        // Verify the token
        const decoded = jwt.verify(token, 'abc123');
        if (!decoded) {
            return res.status(401).json({ message: "Invalid token" });
        }

        // Check if the user exists
        const user = await User.findById(decoded.id);
        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }

        // Attach the user object to the request for further use
        req.user = user;
        next();
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = {authenticateUser};
