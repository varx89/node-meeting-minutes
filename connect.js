const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = async () => {
    // mongoose
    //     .connect(process.env.DB_URL, {
    //         useNewUrlParser: true,
    //         useUnifiedTopology: true,
    //     })
    //     .then(() => {
    //         console.log('Successfully connected to MongoDB Atlas!');
    //     })
    //     .catch((error) => {
    //         console.log('Unable to connect to MongoDB Atlas!');
    //         console.error(error);
    //     });

    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to Database MongoDB!');
    } catch (error) {
        console.log(error);
    }
};

module.exports = dbConnect;
