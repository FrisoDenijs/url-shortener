const urlRoute = require('../../routes/url.route');
const viewRoute = require ('../../routes/views.route');
const redirectRoute = require ('../../routes/redirect.route');

exports.setup = (app) => {
    app.use('/', viewRoute);
    app.use('/', redirectRoute);
    app.use('/api/url', urlRoute);
}