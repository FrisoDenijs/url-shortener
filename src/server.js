//import express from 'express';



const mongooseSetup = require('./setups/mongoose.setup');
const expressSetup = require('./setups/express.setup');

mongooseSetup.setup();
const app = expressSetup.setup();



// eslint-disable-next-line no-undef
const port = process.env.port || 3000;
// eslint-disable-next-line no-unused-vars
const server = app.listen(port, () => {
	console.log('Server is up and running on port ' + port);
});
