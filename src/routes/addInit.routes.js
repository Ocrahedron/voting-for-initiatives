const express = require('express');

const router = express.Router();

const renderAddInit = require('../controllers/AddInitController');

router.get('/addInit', renderAddInit).post('/addInit', renderAddInit);

module.exports = router;
