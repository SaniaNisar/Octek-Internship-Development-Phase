// const express = require('express');
// const router = express.Router();
// const { login } = require('../controllers/authController');

// router.post('/login', login); 

// module.exports = router;

import express from 'express';
import { login } from '../controllers/authController.js'; 
import { forgotPasswordController } from '../controllers/forgotPasswordController.js';

const router = express.Router();

router.post('/login', login);
router.post('/forgotPassword', forgotPasswordController);

export default router;
