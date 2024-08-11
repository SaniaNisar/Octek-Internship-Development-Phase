// const express = require('express');
// const app = express();
// const sequelize = require('./config/database');
// const { User } = require('./modules/user/models/user'); // Ensure this path is correct

// const authRoutes = require('./modules/auth/routes/authRoutes');

// // Middleware setup
// app.use(express.json());
// app.use('/auth', authRoutes);

// // Sync models with database
// const startServer = async () => {
//     try {
//         await sequelize.sync({ alter: true });
//         console.log('Database synced');
//         app.listen(process.env.PORT || 3001, () => {
//             console.log(`Server running on port ${process.env.PORT || 3001}`);
//         });
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
// };
// startServer();

// // src/server.js
// const express = require('express');
// const app = express();
// const sequelize = require('./config/database');
// const authRoutes = require('./modules/auth/routes/authRoutes');
// const User = require('./modules/user/models/user'); // Ensure this import
// console.log('User model:', User); // Log to check if User is imported correctly

// // Middleware for parsing JSON bodies
// app.use(express.json());

// // Use auth routes
// app.use('/auth', authRoutes);
// const startServer = async () => {
//     try {
//         await sequelize.sync({ alter: true }); // Sync models
//         console.log('Database synced');
//         app.listen(process.env.PORT || 3001, () => {
//             console.log(`Server running on port ${process.env.PORT || 3001}`);
//         });
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
// };

// startServer();

import express from 'express';
import sequelize from './config/database.js';
import authRoutes from './modules/auth/routes/authRoutes.js';
import User from './modules/user/models/user.js'; // Ensure this import

const app = express();
console.log('User model:', User); // Log to check if User is imported correctly

// Middleware for parsing JSON bodies
app.use(express.json());

// Use auth routes
app.use('/auth', authRoutes);

const startServer = async () => {
    try {
        if (process.env.NODE_ENV !== 'production') {
            await sequelize.sync({ alter: true });
        }
        console.log('Database synced');
        app.listen(process.env.PORT || 3001, () => {
            console.log(`Server running on port ${process.env.PORT || 3001}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

startServer();
