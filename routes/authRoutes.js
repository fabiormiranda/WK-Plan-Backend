const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const isAuthenticated = require('../middleware/auth');

router.put('/change-password', isAuthenticated, authController.changePassword);

router.post('/signup', (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Please provide name, email and password' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  if (!passwordRegex.test(password)) {
    return res.status(400).json({
      message: 'Password must be at least 6 chars and contain at least one number, one lowercase and one uppercase letter',
    });
  }

  authController.signup(req, res, next);
});

router.post('/login', (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Please provide email and password' });
  }

  authController.login(req, res, next);
});

// Rota protegida de exemplo
router.get('/profile', isAuthenticated, (req, res) => {
  res.json({
    message: 'Welcome to your profile!',
    user: req.user,
  });
});

// Rota de verificação de token para manter sessão ao atualizar a página
router.get('/verify', isAuthenticated, (req, res) => {
  res.status(200).json(req.user);
});

module.exports = router;
