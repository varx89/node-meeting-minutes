// require('dotenv').config();

const express = require('express');
const app = express();
const dbConnect = require('./helpers/connect');
const routes = require('./routes/authRoutes');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const PORT = process.env.APP_PORT || 8000;
const MONGO_URL = process.env.MONGO_URL;

dbConnect(MONGO_URL);

//middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use('/', routes);

// app.use('/', (req, res) => {
//     res.status(200).send('hello matanpizda');
// });

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
