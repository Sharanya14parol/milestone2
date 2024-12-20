// Sort attendees by preference
exports.sortByPreference = (req, res) => {
    const { attendees } = req.body;
  
    if (!Array.isArray(attendees) || attendees.length === 0) {
      return res.status(400).json({ message: 'Invalid attendees data' });
    }
  
    const sortedAttendees = attendees.sort((a, b) => {
      const preferenceOrder = ['VIP','speaker','vegetarian', 'vegan', 'non-veg',];
      return preferenceOrder.indexOf(a.preference) - preferenceOrder.indexOf(b.preference);
    });
  
    res.status(200).json({ success: true, attendees: sortedAttendees });
  };
  