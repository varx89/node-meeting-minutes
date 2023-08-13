const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;
const User = require('../models/usersModel');

const handleListProjects = (req, res) => {
    const { token } = req.cookies;

    async function checkUserExists({ paramUser }) {
        const user = await User.findOne({ paramUser });
        // res.json(user);
        if (!user) {
            return res.json({
                error: 'Invalid data!',
            });
        }
        res.json(user.projects);
    }

    if (token) {
        jwt.verify(token, jwtSecret, {}, (err, user) => {
            if (err) throw err;
            try {
                checkUserExists(user.id);
            } catch (error) {
                console.log(error);
            }
        });
    } else {
        res.json(null);
    }
};

module.exports = handleListProjects;
