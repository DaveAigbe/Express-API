const express = require('express');
const mongoose = require('mongoose');
const indexRoute = require('./routes/index');
const postsRoute = require('./routes/Posts')
const bodyParser = require('body-parser')

// Environment variables
require('dotenv').config()
const uri = process.env.DB_CONNECTION;

// Connect to DB
mongoose.connect(uri, () =>
    console.log('connected to DB!')
);

// Execute express and specify port
const app = express();
const PORT = 3000;

// Convert all req to JSON data
app.use(bodyParser.json())

// Everytime you go to /, use the indexRoute
app.use('/', indexRoute);
app.use('/posts', postsRoute)



app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});
