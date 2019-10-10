const urlRoute = require('../../routes/url.route');
const viewRoute = require ('../../routes/views.route');

exports.setup = (app) => {
    app.use('/', viewRoute);
    app.use('/api/url', urlRoute);
}