// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const { User } = require("../../user/models/user");

// const login = async (req, res) => {
//   try {
//     console.log("User model:", User);
//     console.log("User model methods:", Object.keys(User));
//     const { email, password } = req.body; // Update to match your model fields

//     // Fetch user from database
//     const user = await User.findOne({ where: { email } }); // Use `email` instead of `username`
//     if (!user) return res.status(404).json({ message: "User not found" });

//     // Check password
//     const isMatch = await bcrypt.compare(password, user.password); // Use bcrypt to compare hashed passwords
//     if (!isMatch) return res.status(401).json({ message: "Invalid password" });

//     // Generate token
//     const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
//     res.status(200).json({ token });
//   } catch (error) {
//     console.error("Error during login:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// module.exports = {
//   login,
// };

// src/modules/auth/controllers/authController.js
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const User = require('../../user/models/user'); // Adjust the path if necessary

// const login = async (req, res) => {
//     try {
//         const { email, password } = req.body; // Ensure the parameter is named 'email' and not 'username'
        
//         // Check if email and password are provided
//         if (!email || !password) {
//             return res.status(400).json({ message: 'Email and password are required' });
//         }
        
//         // Fetch user from database
//         const user = await User.findOne({ where: { email } });
//         if (!user) return res.status(401).json({ message: 'User not found' });

//         // Check password
//         if (user.password !== password) return res.status(401).json({ message: 'Invalid password' });
        
//         console.log('Request body:', req.body);
//         console.log('User found:', user);
        
//         // Generate token
//         const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
//         res.status(200).json({ data: { user, token } });
//     } catch (error) {
//         console.error('Error during login:', error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// };


// module.exports = {
//     login,
// };


import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../../user/models/user.js';

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Check if email and password are provided
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }
        
        // Fetch user from database
        const user = await User.findOne({ where: { email,verified:true } });
        if (!user) return res.status(401).json({ message: 'User not found' });

        // // Check password
        // if (!await bcrypt.compare(password, user.password)) {
        //     return res.status(401).json({ message: 'Invalid password' });
        // }

        // Directly compare passwords
        if (user.password !== password) return res.status(401).json({ message: 'Invalid password' });
        
        console.log('Request body:', req.body);
        console.log('User found:', user);
        
        // Generate token
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
        res.status(200).json({ data: { user, token } });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export { login };
