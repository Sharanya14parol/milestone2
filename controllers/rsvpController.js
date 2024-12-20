let rsvpQueue = [];  // Queue to manage RSVPs
const maxAttendees = 3;  // maximum capacity

// Add an RSVP response to the queue
exports.addRSVP = (req, res) => {
  const { name, email, preference, attendance } = req.body;

  if (!name || !email || !preference || !attendance) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // If the event is full, reject new RSVPs
  if (attendance === "yes" && rsvpQueue.length >= maxAttendees) {
    return res.status(400).json({ message: 'Event is at full capacity, unable to accept new RSVPs.' });
  }

  rsvpQueue.push({ name, email, preference, attendance });
  res.status(201).json({ success: true, message: 'RSVP added successfully' });
  console.log("Updated RSVP Queue:", rsvpQueue);
};

// Get all RSVPs
exports.getRSVPs = (req, res) => {
  res.status(200).json({ success: true, rsvps: rsvpQueue });
};

// Get attending RSVPs (attendance = "yes")
exports.getAttendingRSVPs = (req, res) => {
  const attending = rsvpQueue.filter(rsvp => rsvp.attendance === "yes");
  res.status(200).json({ success: true, rsvps: attending });
};

// Get not attending RSVPs (attendance = "no")
exports.getNotAttendingRSVPs = (req, res) => {
  const notAttending = rsvpQueue.filter(rsvp => rsvp.attendance === "no");
  res.status(200).json({ success: true, rsvps: notAttending });
};
