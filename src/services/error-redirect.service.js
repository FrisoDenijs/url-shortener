const MongoError = "MongoError";

exports.redirectError = (err, res) => {
    console.log(err);
    
    switch(err) {
        case err.name === MongoError:
            redirectMongoDBError(err, res);
            break;
        default:
            redirectUnknownError(err, res);
            break;
    }
};

const redirectMongoDBError = (err, res) => {
    res.redirect('/error/m' + err.code);
};

const redirectUnknownError = (err, res) => {
    let objJsonStr = JSON.stringify(err);
    // eslint-disable-next-line no-undef
    let objJsonB64 = Buffer.from(objJsonStr).toString("base64");
    res.redirect('/error/' + objJsonB64 );
};
