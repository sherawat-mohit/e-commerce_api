// importing required packages
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

// connecting mongoose to its default server and Ecommerce Database
mongoose.connect('mongodb+srv://devsherawatmohit:mohit952899@ecommerce.ajnvtyg.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true // to avoid the "DeprecationWarning"
});


const db = mongoose.connection;
db.on('error', console.error.bind(console, "Error connecting to MongoDB")); // Error while connecting to database

db.once('open', function(){
    console.log('Connected to Database :: MongoDB');    // connection successful
});

module.exports = db;