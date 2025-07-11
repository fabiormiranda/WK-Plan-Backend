// Load environment variables from .env
require("dotenv").config();

// Connect to MongoDB using your db.js configuration
require("./db");

const express = require("express");
const app = express();

// Configure middlewares: logger, CORS, JSON parsing, etc.
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

// Not found middleware (404) — should come after all routes
const { notFound, errorHandler } = require("./middleware/errorHandler");
app.use(notFound);

// Global error handling middleware (should come after the 404 handler)
app.use(errorHandler);

// Start the server on the specified PORT or fallback to 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Export for testing or serverless environments
module.exports = app;
