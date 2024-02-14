const User = require('../models/User')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken');

const signUp = async (req, res) => {
    const { username, email, password,userType } = req.body;
    const hashPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashPassword,userType});
    try {
        await newUser.save();
        res.status(201).json("User Singup succesfully");
    } catch (e) {

        console.log(e);
    }
}
const signIn = async (req, res) => {
    const { email, password } = req.body;
    console.log('Received email:', email);
    try {
        const validUser = await User.findOne({ email });
        if (!validUser) {

            return res.status(404).json("user not found xyx");

        }


        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) {
            return res.status(401).json("password is in correct")
        }
        const token = jwt.sign({ id: validUser._id }, 'abc123');
        const { password: pass, ...restInfo } = validUser._doc;
        res.cookie('access_token', token, { httpOnly: true })
            .status(200)
            .json(restInfo);


    } catch (e) {

        console.log(e);

    }
}

module.exports = { signUp, signIn };