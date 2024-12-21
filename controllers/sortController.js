const { rsvpQueue } = require("./rsvpController");
exports.sortByPreference = (req, res) => {
  if (rsvpQueue.length === 0) {
    return res
      .status(400)
      .json({ message: "No attendees available in the RSVP queue" });
  }

  const sortedAttendees = rsvpQueue.sort((a, b) => {
    const preferenceOrder = ["vegetarian", "vegan", "non-veg"];
    return (
      preferenceOrder.indexOf(a.preference.toLowerCase()) -
      preferenceOrder.indexOf(b.preference.toLowerCase())
    );
  });

  res.status(200).json({ success: true, attendees: sortedAttendees });
};
