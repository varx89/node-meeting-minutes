const mongoose = require('mongoose');

const projectSchema = require('./projectsSchema');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    joinedAt: {
        type: Date,
        default: () => Date.now(),
    },
    projects: [projectSchema],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
