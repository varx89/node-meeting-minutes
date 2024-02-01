const mongoose = require('mongoose');

const projectsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    sloganUrl: String,
    description: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        default: () => Date.now(),
    },
    closeDate: Date,
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    // groupsTasks: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'GroupTasks',
    //     },
    // ],
    // userID: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    // },
});

const Project = mongoose.model('Project', projectsSchema);

module.exports = Project;
