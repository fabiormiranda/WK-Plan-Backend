require("dotenv").config();
require("./db");

const express = require("express");
const app = express();
require("./config")(app);

// Import routes
const authRoutes = require("./routes/authRoutes");
const workoutPlanRoutes = require("./routes/workoutPlanRoutes");
const exerciseRoutes = require("./routes/exerciseRoutes");
const uploadRoutes = require("./routes/uploadRoutes");

// Use routes
app.use("/api/auth", authRoutes);
app.use("/api/workout-plans", workoutPlanRoutes);
app.use("/api/exercises", exerciseRoutes);
app.use("/api", uploadRoutes);

// Error handling
const { notFound, errorHandler } = require("./middleware/errorHandler");
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;
