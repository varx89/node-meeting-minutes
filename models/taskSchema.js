const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    id: Number,
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
});

const Task = taskSchema;

module.exports = Task;
