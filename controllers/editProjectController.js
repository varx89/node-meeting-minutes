const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;
const User = require('../models/usersModel');

const editProject = (req, res) => {
    const { token } = req.cookies;
    const { id } = req.params;
    const { taskTitle, taskDescription, taskImage } = req.body;
    const taskSlogan = taskTitle.replaceAll(' ', '-').toLowerCase();

    //check if user exists and push
    async function checkUserAndProjectId(email, Id) {
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.json({
                error: 'Invalid data!',
            });
        } else {
            user.projects.forEach(async (proj, index) => {
                if (proj._id.equals(Id)) {
                    user.projects[index].title = taskTitle;
                    user.projects[index].description = taskDescription;
                    user.projects[index].sloganUrl = taskSlogan;
                    await user.save();
                }
            });
            // await user.save();
            // if (project) {
            //     return res.json(project);
            // } else {
            //     res.status(404).json('Not Found');
            // }
        }
    }

    if (token) {
        jwt.verify(token, jwtSecret, {}, (err, user) => {
            if (err) throw err;
            try {
                checkUserAndProjectId(user.email, id);
                res.json({
                    success: 'Project Edited Sucessfully',
                });
            } catch (error) {
                console.log(error);
            }
        });
    } else {
        res.json(null);
    }
};

module.exports = editProject;
