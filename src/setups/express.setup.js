const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const routesSetup = require('./express/routes.setup');

exports.setup = () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    app.set('views', path.resolve('src/views'));
    app.set('view engine', 'ejs');
    app.use(express.static(path.resolve('assets')));

    routesSetup.setup(app);


    return app;
};
