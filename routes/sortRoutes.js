const express = require('express');
const router = express.Router();
const sortController = require('../controllers/sortController');

router.post('/', sortController.sortByPreference);

module.exports = router;
