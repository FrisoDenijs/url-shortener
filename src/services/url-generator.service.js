const crypto = require('crypto');

exports.randomURL = () => {
    return crypto.randomBytes(20).toString('base64');
}
