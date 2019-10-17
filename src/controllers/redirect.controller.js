const Url = require('../models/url.model');

exports.redirect = (req, res) => {
	Url.findOne({ shortUrl: req.params.url}, function (err, url) {
		if (err) {
			res.status(400).send(err);
		}
		url && url.fullUrl ? res.redirect(url.fullUrl) : res.status(404).send();
    });
};
