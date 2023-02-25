const express = require('express');

const router = express.Router();

const { renderAddInitController, addInitFormController } = require('../controllers/AddInitController');

router.get('/addInit', renderAddInitController);
router.post('/addInit', addInitFormController);

module.exports = router;
