const mongoose = require('mongoose');

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
    // projects: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'Project',
    //     },
    // ],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
