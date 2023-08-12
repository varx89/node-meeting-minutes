const mongoose = require('mongoose');

const dbConnect = async (url) => {
    mongoose.set('strictQuery', false);
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to Database MongoDB!');
    } catch (error) {
        console.log(error);
    }
};

module.exports = dbConnect;
