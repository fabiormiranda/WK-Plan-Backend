const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const isAuthenticated = require('../middleware/auth');

// Signup route with validation
router.post('/signup', (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Please provide name, email, and password.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format.' });
  }

  const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  if (!passwordRegex.test(password)) {
    return res.status(400).json({
      message: 'Password must be at least 6 characters and contain at least one number, one lowercase, and one uppercase letter.',
    });
  }

  authController.signup(req, res, next);
});

// Login route
router.post('/login', (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Please provide email and password.' });
  }
  authController.login(req, res, next);
});

// Change password (protected)
router.put('/change-password', isAuthenticated, authController.changePassword);

// Profile data route (protected)
router.get('/profile', isAuthenticated, async (req, res) => {
  try {
    const user = await require('../models/User').findById(req.user.userId).select('_id name email');
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Verify token and hydrate frontend
router.get('/verify', isAuthenticated, authController.verify);

module.exports = router;
