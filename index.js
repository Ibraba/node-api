const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// brings express app to life
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/books');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

// this will actully use the routes we exported from api.js
app.use('/api',routes);

//listen to requests
app.listen(process.env.port || 4000, function(){
    console.log("now listening for requests....");
});
