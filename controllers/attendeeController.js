let attendees = []; // Array to store attendee data

// Get all attendees
exports.getAttendees = (req, res) => {
  res.status(200).json({ success: true, attendees });
};

// Add a new attendee
exports.addAttendee = (req, res) => {
  const { name, email, preference } = req.body;

  if (!name || !email || !preference) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  attendees.push({ name, email, preference });
  res.status(201).json({ success: true, message: 'Attendee added successfully', attendees });
};

exports.attendees = attendees;