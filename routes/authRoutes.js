const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');
const isAuthenticated = require('../middleware/auth');

// Route to change user password (protected)
router.put('/change-password', isAuthenticated, authController.changePassword);

// Signup route with validation
router.post('/signup', (req, res, next) => {
  const { name, email, password } = req.body;

  // Check if all required fields are provided
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Please provide name, email, and password.' });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format.' });
  }

  // Validate password strength
  const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  if (!passwordRegex.test(password)) {
    return res.status(400).json({
      message: 'Password must be at least 6 characters and contain at least one number, one lowercase, and one uppercase letter.',
    });
  }

  // Call signup controller if validation passes
  authController.signup(req, res, next);
});

// Login route with basic validation
router.post('/login', (req, res, next) => {
  const { email, password } = req.body;

  // Check if all required fields are provided
  if (!email || !password) {
    return res.status(400).json({ message: 'Please provide email and password.' });
  }

  // Call login controller
  authController.login(req, res, next);
});

// Protected example route to return user profile data
router.get('/profile', isAuthenticated, (req, res) => {
  res.json({
    message: 'Welcome to your profile!',
    user: req.user,
  });
});

// Token verification route for maintaining session on page refresh
router.get('/verify', isAuthenticated, (req, res) => {
  res.status(200).json(req.user);
});

module.exports = router;
