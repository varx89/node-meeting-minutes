const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;
const User = require('../models/userSchema');

const viewProject = (req, res) => {
    const { token } = req.cookies;
    const { id } = req.params;

    //check if user exists and push
    async function checkUserAndProjectSlogan(email, Id) {
        const user = await User.findOne({ email: email });
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
