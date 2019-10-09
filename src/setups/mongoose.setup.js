const mongoose = require('mongoose');

exports.setup = () => {
    let dev_db_url = 'mongodb://localhost:27017/url-shortener';
    // eslint-disable-next-line no-undef
    const mongoDB = process.env.MONGODB_URI || dev_db_url;
    const mongoConfig = {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    };
    mongoose.connect(mongoDB, mongoConfig);
    // eslint-disable-next-line no-undef
    mongoose.Promise = global.Promise;
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
}
