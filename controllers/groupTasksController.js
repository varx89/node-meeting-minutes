const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;
const User = require('../models/usersModel');

const handleListGroups = (req, res) => {
    const { token } = req.cookies;
    const { id } = req.params;

    async function checkUserExists(paramUser, Id) {
        const user = await User.findOne({ email: paramUser });
        // res.json(user);
        if (!user) {
            return res.json({
                error: 'Invalid data!',
            });
        } else {
            let project = user.projects.filter((item) => item._id.equals(Id));

            if (project.length > 0) {
                return res.json(project);
            } else {
                res.status(404).json('Not Found');
            }
        }
    }

    if (token) {
        jwt.verify(token, jwtSecret, {}, (err, user) => {
            if (err) throw err;
            try {
                checkUserExists(user.email, id);
            } catch (error) {
                console.log(error);
            }
        });
    } else {
        res.json(null);
    }
};

module.exports = handleListGroups;
