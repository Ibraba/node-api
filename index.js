const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
import logger from 'morgan';
import homeRoute from './server/routes/index';
import mainRoutes from './server/routes/main';

// brings express app to life
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/books')
    .then( () => {
        console.log(`Database connected`)
    })
    .catch( (error) => {
        console.log(`Error connecting to database`);
    });
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(logger('dev'));

// set up route
homeRoute(app);
app.use('/api/', mainRoutes);

// this will actully use the routes we exported from api.js
//app.use('/api',routes);

//listen to requests
app.listen(process.env.port || 4000, function(){
    console.log("now listening for requests....");
});

export default app;
