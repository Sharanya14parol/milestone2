const express = require('express');
const router = express.Router();
const rsvpController = require('../controllers/rsvpController');

router.post('/', rsvpController.addRSVP);

router.get('/', rsvpController.getRSVPs);

module.exports = router;
