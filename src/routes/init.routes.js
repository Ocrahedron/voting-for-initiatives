const express = require('express');

const router = express.Router();

const {renderInitPage, addYesVoice, addNoVoice} = require('../controllers/InitPageController');

router.get('/init', renderInitPage);
router.put('/addYesVoice', addYesVoice)
router.put('/addNoVoice', addNoVoice)

module.exports = router;
