const express = require('express');
const router = express.Router();
const attendeeController = require('../controllers/attendeeController');

router.get('/', attendeeController.getAttendees);
router.post('/', attendeeController.addAttendee);

module.exports = router;
