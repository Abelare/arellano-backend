const express = require('express');
const router = express.Router();
const { buscar } = require('../controllers/searchController');

router.get('/', buscar);

module.exports = router;
