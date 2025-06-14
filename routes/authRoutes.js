// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/add-user', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
