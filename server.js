require('dotenv').config();

const express = require('express');
const app = express();
const dbConnect = require('./connect');
const routes = require('./routes/authRoutes');
const cors = require('cors');

const PORT = process.env.APP_PORT;
const MONGO_URL = process.env.MONGO_URL || 8000;

dbConnect(MONGO_URL);

app.use(express.json());

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
