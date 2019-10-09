const bodyParser = require('body-parser');
const urlRoute = require('../routes/url.route');
const express = require('express');

exports.setup = () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use('/api/url', urlRoute);

    return app;
}