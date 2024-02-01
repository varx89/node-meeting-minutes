const mongoose = require('mongoose');

const groupTasksSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
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

const GroupTasks = mongoose.model('GroupTasks', groupTasksSchema);

module.exports = GroupTasks;
