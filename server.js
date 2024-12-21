const express = require("express");
const bodyParser = require("body-parser");

// Import Routes
const attendeeRoutes = require("./routes/attendeeRoutes");
const priorityRoutes = require("./routes/priorityRoutes");
const rsvpRoutes = require("./routes/rsvpRoutes");
const sortRoutes = require("./routes/sortRoutes");
const app = express();
const PORT = 5002;

app.use(bodyParser.json());

app.use("/api/attendees", attendeeRoutes);
app.use("/api/priority", priorityRoutes);
app.use("/api/rsvp", rsvpRoutes);
app.use("/api/sort", sortRoutes);

// Server Start
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
