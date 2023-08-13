const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;
const User = require('../models/usersModel');

const viewProject = (req, res) => {
    const { token } = req.cookies;
    const { id } = req.params;
    const { taskTitle, taskDescription } = req.body;

    //check if user exists and push
    async function checkUserAndProjectSlogan(email, sloganId) {
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.json({
                error: 'Invalid data!',
            });
        } else {
            const project = User.findOneAndUpdate(
                {
                    email: email,
                    'projects.sloganUrl': sloganId,
                },
                { $set: { 'projects.$.title': taskTitle } },
                { new: true }
            );

            if (project) {
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
                checkUserAndProjectSlogan(user.email, id);
            } catch (error) {
                console.log(error);
            }
        });
    } else {
        res.json(null);
    }
};

module.exports = viewProject;
