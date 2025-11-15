const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

router.post('/procesar', paymentController.procesarPago);

module.exports = router;
