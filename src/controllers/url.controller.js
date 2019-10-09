const Url = require('../models/url.model');


//Simple version, without validation or sanitation
exports.test =  (req, res) => {
	res.send('Greetings from the URL controller!');
}

exports.create = (req, res) => {
	let url = new Url(
		{
			fullUrl: req.body.fullUrl,
			shortUrl: req.body.shortUrl || undefined
		}
	);

	url.save(function (err, url) {
		if (err) {
			res.status(400).send(err);
            return;
        }
        
		res.status(200).send(url);
	});
}

exports.redirect = (req, res) => {
	Url.findOne({ shortUrl: req.params.url}, function (err, url) {
		if (err) {
			res.status(400).send(err);
		}
		url && url.fullUrl ? res.redirect(url.fullUrl) : res.status(404).send();
    })
}
