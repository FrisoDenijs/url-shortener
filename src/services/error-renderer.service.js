exports.renderError = (err, res) => {
    switch(err.substring(0,1)) {
        case 'm':
            handleMongoDBError(err, res);
            break;
        default:
            handleUnkownError(err, res);
    }
};

const handleMongoDBError = (err, res) => {
    switch(err) {
        case 'm11000':
            res.render('error', errObj(422, 'This url already exists, please choose another'));
            break;
        default:
            handleUnkownError(err, res);
            break;
    }
};

const handleUnkownError = (err, res) => {
    res.render('error', errObj(500, 'Unknown error, please send the following string to //placeholder// \n' + err));
};

const errObj = (code, msg) => {
    return {
        code: code,
        msg: msg
    };
};
