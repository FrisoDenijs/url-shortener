const express = require('express');
const router = express.Router();
const views_controller = require('../controllers/views.controller');

router.get('/', views_controller.index);

module.exports = router;
