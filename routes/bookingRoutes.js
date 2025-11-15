const express = require('express');
const router = express.Router();
const { crearReserva } = require('../controllers/bookingController');

router.post('/crear', crearReserva);

module.exports = router;
