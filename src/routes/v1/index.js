const express = require('express');
const router = express.Router();

router.use('/cities', require('./city'));
router.use('/airports', require('./airport'));

module.exports = router;

