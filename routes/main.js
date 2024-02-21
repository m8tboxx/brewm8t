const express = require('express');

const mainController = require('../controllers/mainController');
const router = express.Router();

router.get('/', mainController.getIndex);

router.get('/receipts', mainController.getReceipts);

module.exports = router;