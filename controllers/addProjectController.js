const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;
const User = require('../models/usersModel');

const addProject = (req, res) => {
    const { token } = req.cookies;
    const { project, textAreaDesc } = req.body;

    if (!project || project.length <= 8 || project.length > 16) {
        return res.json({
            error: 'Title between 8-16 characters!',
        });
    }
    if (
        !textAreaDesc ||
        textAreaDesc.length <= 8 ||
        textAreaDesc.length > 150
    ) {
        return res.json({
            error: 'Description between 8-150 characters!',
        });
    }
    //check if user exists and push
    async function checkUserAndProject(email, projTitle) {
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.json({
                error: 'Invalid data!',
            });
        } else {
            let project = user.projects.filter(
                (item) => item.title === projTitle
            );
            if (project.length > 0) {
                return res.json({
                    error: 'Project already exists!',
                });
            }
            if (project.length < 1) {
                //push project to array of projects in mongo
                user.projects.push({
                    title: projTitle,
                    sloganUrl: projTitle.replaceAll(' ', '-').toLowerCase(),
                    description: textAreaDesc,
                });
                await user.save();
                return res.json({
                    success: 'Project Added Sucessfully!',
                });
            }
        }
    }

    if (token) {
        jwt.verify(token, jwtSecret, {}, (err, user) => {
            if (err) throw err;
            try {
                checkUserAndProject(user.email, project);
            } catch (error) {
                console.log(error);
            }
        });
    } else {
        res.json(null);
    }
};

module.exports = addProject;
