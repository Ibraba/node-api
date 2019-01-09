const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);

// brings express app to life
const app = express();
const port = process.env.port || 4000;
//connect to mongodb
mongoose.connect('mongodb://localhost/books');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

// this will actully use the routes we exported from api.js
app.use('/api',routes);

//listen to requests
app.listen(port, function(){
    console.log("now listening for requests at", port);
});
