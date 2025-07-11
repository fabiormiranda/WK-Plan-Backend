const jwt = require("jsonwebtoken");

/**
 * Middleware to verify if the user is authenticated via JWT.
 * 
 * - Checks for a valid 'Authorization' header with a Bearer token.
 * - Verifies the token using JWT_SECRET.
 * - Attaches the decoded user payload to req.user for downstream access.
 * - Returns a 401 error if the token is missing, invalid, or expired.
 */
const isAuthenticated = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    // Check if Authorization header is present and properly formatted
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided or invalid format" });
    }

    // Extract the token from the header
    const token = authHeader.split(" ")[1];

    // Verify the token and extract the payload
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the user payload to the request object for further usage
    req.user = payload;

    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error("Authentication error:", error.message);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = isAuthenticated;
