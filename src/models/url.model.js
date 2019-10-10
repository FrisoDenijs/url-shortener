const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const urlGenerator = require('../services/url-generator.service');

const UrlSchema = new Schema({
    fullUrl: {type: String, required: true},
    shortUrl: {type: String, unique: true}
});

UrlSchema.pre('save', function(next) {
    this.shortUrl = this.shortUrl === undefined ? urlGenerator.randomURL() : this.shortUrl;
    
    return next();
});

// Export the model
module.exports = mongoose.model('Url', UrlSchema);
