const express = require('express');
const router = express.Router();
const rsvpController = require('../controllers/rsvpController');

router.post('/', rsvpController.addRSVP);

router.get('/', rsvpController.getRSVPs);

router.get('/attending', rsvpController.getAttendingRSVPs);

router.get('/not-attending', rsvpController.getNotAttendingRSVPs);

module.exports = router;
