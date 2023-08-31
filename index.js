// importing required packages
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/mongoose');
const port = 8000;

// initializing express.js
const app = express();

// using express inbuilt body-parser
app.use(bodyParser.urlencoded({extended: true}));

// using routes
app.use('/products', require('./routes/products'));

// starting the server
app.listen(port, function(){
    console.log('API is live and running on port : ',port);
});