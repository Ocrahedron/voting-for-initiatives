const express = require('express');

const router = express.Router();

const renderMainPage = require('../controllers/MainPageController');

router.get('/', renderMainPage);

module.exports = router;
