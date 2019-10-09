const Url = require('../models/url.model');


//Simple version, without validation or sanitation
exports.test =  (req, res) => {
	res.send('Greetings from the URL controller!');
}

exports.create = (req, res) => {
	let url = new Url(
		{
			fullUrl: req.body.fullUrl
		}
	);

	url.save(function (err, url) {
		if (err) {
			res.status(400).send(
                {
                    error: err,
                    requestBody: req.body
                }
            );
            return;
        }
        
		res.status(200).send(url);
	});
}

exports.reroute = (req, res) => {
	Url.findOne({ shortUrl: req.params.url}, function (err, url) {
		res.status(200).send(url);
    })
}
