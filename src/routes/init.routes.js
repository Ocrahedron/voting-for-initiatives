const express = require('express');

const router = express.Router();

const renderInitPage = require('../controllers/InitPageController');

router.get('/init', renderInitPage);

module.exports = router;
