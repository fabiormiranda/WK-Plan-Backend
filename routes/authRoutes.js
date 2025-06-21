// routes/authRoutes.js

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const isAuthenticated = require('../middleware/auth'); // Importa o middleware

// SIGN UP (público)
router.post('/signup', authController.signup);

// LOGIN (público)
router.post('/login', authController.login);

// Rota protegida (exemplo opcional)
router.get('/profile', isAuthenticated, (req, res) => {
  res.json({
    message: 'Welcome to your profile!',
    user: req.user, // Os dados decodificados do token
  });
});

module.exports = router;
