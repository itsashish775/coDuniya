// routes/userRoutes.js
const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/registration', userController.userRegistration);
// Add other route definitions for CRUD operations

module.exports = router;
