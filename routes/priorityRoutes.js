const express = require('express');
const router = express.Router();
const priorityController = require('../controllers/priorityController');

router.get('/', priorityController.getPriorityAttendees);
router.post('/', priorityController.addPriorityAttendee);

module.exports = router;
