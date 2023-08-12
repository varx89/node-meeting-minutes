const User = require('../models/usersModel');
const { comparePassword } = require('../helpers/auth');

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

        //check if passwords match
        const match = await comparePassword(password, user.password);
        if (match) {
            res.json('passwords match');
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
