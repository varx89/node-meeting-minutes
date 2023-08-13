const mongoose = require('mongoose');
const groupTasksSchema = require('./groupTasksSchema');

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
    groupsTasks: [groupTasksSchema],
});

const Project = projectsSchema;

module.exports = Project;
