const express = require('express');

const router = express.Router();

const {renderMainPage, renderInitPage} = require('../controllers/MainPageController');

router.get('/', renderMainPage);
router.get('/initPage/:id', renderInitPage)

module.exports = router;
