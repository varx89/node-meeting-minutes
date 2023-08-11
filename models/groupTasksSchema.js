const mongoose = require('mongoose');
const taskSchema = require('./taskSchema');

const groupTasksSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    tasks: [taskSchema],
});

const GroupTask = groupTasksSchema;

module.exports = GroupTask;
