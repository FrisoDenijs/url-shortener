//import express from 'express';

const express = require('express');

const bodyParser = require('body-parser');

const urlRoute = require('./routes/url.route');
const app = express();

const mongooseSetup = require('./setups/mongoose.setup');

mongooseSetup.setup();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api/url', urlRoute);



// eslint-disable-next-line no-undef
const port = process.env.port || 3000;
// eslint-disable-next-line no-unused-vars
const server = app.listen(port, () => {
	console.log('Server is up and running on port ' + port);
});
