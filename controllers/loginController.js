const User = require('../models/usersModel');
const { comparePassword } = require('../helpers/auth');
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

const handleLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        //check if email user exist
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({
                error: 'Email not found in database!',
            });
        }

        //deep copy user object and delete password property because we wont need it
        // let userObjectWithoutPassword = JSON.parse(JSON.stringify(user));
        // delete userObjectWithoutPassword.password;

        //check if passwords match
        const match = await comparePassword(password, user.password);
        if (match) {
            jwt.sign(
                { email: user.email, id: user._id, fullName: user.fullName },
                jwtSecret,
                {},
                (err, token) => {
                    if (err) throw err;
                    res.cookie('token', token).json(user);
                }
            );
        } else {
            res.json({
                error: 'Passwords dont match!',
            });
        }
    } catch (error) {
        console.log(error);
    }
};

module.exports = handleLogin;
