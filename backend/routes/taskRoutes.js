const express = require('express');
const router = express.Router();
const { taskModel } = require('../models/taskModel');

// Get all task
router.get('/task', async (req, res) => {
  try {
    const task = await taskModel.findAll();
    res.json(task);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Get task by ID
router.get('/task/:id', async (req, res) => {
  try {
    const task = await taskModel.findByPk(req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'task not found' });
    }
    res.json(task);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Create a new task
router.post('/newtask', async (req, res) => {
  try {
    const task = await taskModel.create(req.body);
    res.status(201).json(task);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Update a task
router.put('/task/:id', async (req, res) => {
  try {
    const task = await taskModel.findByPk(req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'task not found' });
    }
    await task.update(req.body);
    res.json(task);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Delete a user
router.delete('/task/:id', async (req, res) => {
  try {
    const task = await taskModel.findByPk(req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'task not found' });
    }
    await task.destroy();
    res.json({ message: 'task deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
