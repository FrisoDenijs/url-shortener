const express = require('express');
const router = express.Router();
const redirect_controller = require('../controllers/redirect.controller');

router.get('/:url', redirect_controller.redirect);

module.exports = router;
