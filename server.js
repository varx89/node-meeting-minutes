const express = require('express');
const app = express();
const dbConnect = require('./connect');

dbConnect();

app.listen(8000, () => {
    console.log('Server started on port 8000');
});
