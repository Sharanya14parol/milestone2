// let rsvpQueue = [];
// const maxAttendees = 3;

// exports.addRSVP = (req, res) => {
//   const { name, email, preference, attendance } = req.body;

//   if (!name || !email || !preference || !attendance) {
//     return res.status(400).json({ message: "All fields are required" });
//   }

//   if (attendance === "yes")
//     if (rsvpQueue.length >= maxAttendees) {
//       return res.status(400).json({
//         message: "Event is at full capacity, unable to accept new RSVPs.",
//       });
//     }

//     rsvpQueue.push({ name, email, preference, attendance });
//     res.status(201).json({ success: true, message: "RSVP added successfully" });
//     console.log("Updated RSVP Queue:", rsvpQueue);
//   } else {
//     res.status(200).json({
//       success: false,
//       message: "RSVP not added since attendance is marked as NO .",
//     });
//   }
// };

// exports.getRSVPs = (req, res) => {
//   res.status(200).json({ success: true, rsvps: rsvpQueue });
// };

// exports.rsvpQueue = rsvpQueue;

const fs = require("fs");

let rsvpQueue = [];
const maxAttendees = 3;

exports.addRSVP = (req, res) => {
  const { name, email, preference, attendance } = req.body;

  if (!name || !email || !preference || !attendance) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (attendance === "yes") {
    if (rsvpQueue.length >= maxAttendees) {
      return res.status(400).json({
        message: "Event is at full capacity, unable to accept new RSVPs.",
      });
    }

    rsvpQueue.push({ name, email, preference, attendance });
    res.status(201).json({ success: true, message: "RSVP added successfully" });

    // Log the updated RSVP queue to the file
    const logMessage = `Updated RSVP Queue: ${JSON.stringify(
      rsvpQueue,
      null,
      2
    )}\n`;

    // Append the log message to the file 'rsvp-log.txt'
    fs.appendFileSync("rsvp-log.txt", logMessage, "utf8");
  } else {
    res.status(200).json({
      success: false,
      message: "RSVP not added since attendance is marked as NO.",
    });
  }
};

exports.getRSVPs = (req, res) => {
  res.status(200).json({ success: true, rsvps: rsvpQueue });
};

exports.rsvpQueue = rsvpQueue;
