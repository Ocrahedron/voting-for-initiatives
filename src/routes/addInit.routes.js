const express = require('express');

const router = express.Router();

<<<<<<< HEAD
const renderAddInit = require('../controllers/AddInitController');

router.get('/addInit', renderAddInit).post('/addInit', renderAddInit);
=======
const { renderAddInitController, addInitFormController } = require('../controllers/AddInitController');

router.get('/addInit', renderAddInitController);
router.post('/addInit', addInitFormController);
>>>>>>> 71fa6f5cddb31d43b272be6c70385dbf07d4b95b

module.exports = router;
