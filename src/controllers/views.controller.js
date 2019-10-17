const errorRenderer = require('../services/error-renderer.service');

exports.index =  (req, res) => {
	res.render('index', { title: 'Friso\'s URL Shortener' });
};

exports.error =  (req, res) => {
	errorRenderer.renderError(req.params.error, res);
};