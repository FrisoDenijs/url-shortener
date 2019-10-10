const express = require('express');
const router = express.Router();
const url_controller = require('../controllers/url.controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', url_controller.test);
router.post('/', url_controller.create);

module.exports = router;
