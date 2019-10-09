const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const urlGenerator = require('../services/url-generator.service');

const UrlSchema = new Schema({
    fullUrl: {type: String, required: true},
    shortUrl: {type: String}
});

UrlSchema.pre('save', function(next) {
    this.shortUrl = urlGenerator.randomURL();
    console.log(this);
    return next();
});

// Export the model
module.exports = mongoose.model('Url', UrlSchema);
