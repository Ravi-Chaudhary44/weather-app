const express = require('express');
const router = express.Router();
const { getWeather } = require('../controllers/weatherController');
const { validateCityParam } = require('../utils/apiHelpers');

router.get('/', validateCityParam, getWeather);

module.exports = router;
