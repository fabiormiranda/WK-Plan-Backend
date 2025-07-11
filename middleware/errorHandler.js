// middleware/errorHandler.js

/**
 * Middleware for handling requests to undefined routes (404).
 * Should always be placed after all your route definitions in your app.
 */
const notFound = (req, res, next) => {
  res.status(404).json({ errorMessage: "This route does not exist" });
};

/**
 * Global error-handling middleware.
 * Logs the error details and sends a structured JSON error response to the client.
 *
 * - Logs method, path, and error for debugging.
 * - Sends a 500 status by default or the provided error status.
 * - Ensures response is sent only if headers have not already been sent.
 */
const errorHandler = (err, req, res, next) => {
  console.error("ERROR", req.method, req.path, err);

  if (!res.headersSent) {
    res.status(err.statusCode || 500).json({
      errorMessage: err.message || "Internal server error. Check the server console.",
    });
  }
};

module.exports = { notFound, errorHandler };
