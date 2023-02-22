const express = require('express');

const router = express.Router();

const renderProfile = require('../controllers/ProfileControler');

router.get('/profile', renderProfile);

module.exports = router;
