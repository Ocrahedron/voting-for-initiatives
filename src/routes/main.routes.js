const express = require('express');

const router = express.Router();

const {renderMainPage, renderInitPage, showChoosedInits} = require('../controllers/MainPageController');

router.get('/', renderMainPage);
router.get('/initPage/:id', renderInitPage)
router.post('/showChoosedInits', showChoosedInits)

module.exports = router;
