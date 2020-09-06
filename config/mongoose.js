// require the library
const mongoose = require('mongoose');

// connect to database
  mongoose.connect('mongodb://localhost/codeial_db');

// acquire the connection (to check if it is successful)
 const db = mongoose.connection;

// // error
db.on('error', console.error.bind(console , 'error conneecting to db'));

// up and running then print the msg
 db.once('open' , function(){
    console.log('Hurrayyy!!!!!Successfully connected to the database:))')
 });