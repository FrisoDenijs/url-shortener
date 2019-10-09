import express from 'express';

const app = express();

// eslint-disable-next-line no-undef
const port = process.env.port || 3000;

// eslint-disable-next-line no-unused-vars
const server = app.listen(port, () => {
	console.log('Server is up and running on port ' + port);
});
