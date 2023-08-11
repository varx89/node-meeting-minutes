const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const dbConnect = async (url) => {
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
