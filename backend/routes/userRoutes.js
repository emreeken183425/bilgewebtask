const express = require('express');
const router = express.Router();
const { userModel } = require('../models/userModel');

// Get all users
router.get('/user', async (req, res) => {
  try {
    const users = await userModel.findAll();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Get user by ID
router.get('/user/:id', async (req, res) => {
  try {
    const user = await userModel.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Create a new user
router.post('/newuser', async (req, res) => {
  try {
    const user = await userModel.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Update a user
router.put('/user/:id', async (req, res) => {
  try {
    const user = await userModel.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    await user.update(req.body);
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Delete a user
router.delete('/user/:id', async (req, res) => {
  try {
    const user = await userModel.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    await user.destroy();
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
