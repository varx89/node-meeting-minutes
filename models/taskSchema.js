const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    image: String,
    description: {
        type: String,
        required: true,
    },
    comments: [String],
    flag: Number,
    hot: Number,
    startDate: {
        type: Date,
        default: () => Date.now(),
    },
    closeDate: {
        type: Date,
        default: () => Date.now(),
    },
    groupTasksID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'GroupTasks',
    },
    projectID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Tasks;
