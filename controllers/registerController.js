const User = require('../models/usersModel');
const { hashPassword } = require('../helpers/auth');

const handleRegister = async (req, res) => {
    try {
        const { email, fullName, password, cPassword } = req.body;

        //validate input
        if (!email || email.length <= 8 || email.length >= 32) {
            return res.json({
                error: 'Email between 8-16 characters!',
            });
        }
        if (!fullName || fullName.length <= 8 || fullName.length >= 32) {
            return res.json({
                error: 'Full Name between 8-16 characters!',
            });
        }
        if (!password || password.length <= 8 || password.length >= 32) {
            return res.json({
                error: 'Password between 8-16 characters!',
            });
        }
        //check passwords equality
        if (password !== cPassword) {
            return res.json({
                error: 'Passwords are not equal!',
            });
        }

        //check email exist
        const emailExist = await User.findOne({ email });
        if (emailExist) {
            return res.json({
                error: 'Email is already taken!',
            });
        }

        //hashing password
        const hashedPassword = await hashPassword(password);

        await User.create({
            email,
            fullName,
            password: hashedPassword,
        });
        res.json();
    } catch (error) {
        console.log(error);
    }
};

module.exports = handleRegister;
