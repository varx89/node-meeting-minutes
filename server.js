require('dotenv').config();
const express = require('express');
const app = express();
const dbConnect = require('./connect');

const PORT = process.env.APP_PORT;
const MONGO_URL = process.env.MONGO_URL;

dbConnect(MONGO_URL);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
