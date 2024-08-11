// 'use strict';
// const { Model, DataTypes } = require('sequelize');

// module.exports = (sequelize) => {
//   class User extends Model {
//     static associate(models) {
//       // define association here
//     }
//   }
//   User.init({
//     email: DataTypes.STRING,
//     password: DataTypes.STRING,
//     name: DataTypes.STRING,
//     type: DataTypes.INTEGER,
//     verified: DataTypes.BOOLEAN
//   }, {
//     sequelize,
//     modelName: 'User',
//   });
//   return User;
// };

// src/modules/user/models/user.js
// 'use strict';
// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../../../config/database'); // Adjust the path as necessary

// class User extends Model {}

// User.init({
//     email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true
//     },
//     password: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     name: DataTypes.STRING,
//     type: DataTypes.INTEGER,
//     verified: DataTypes.BOOLEAN
// }, {
//     sequelize,
//     modelName: 'User',
// });

// module.exports = User;

import { Model, DataTypes } from 'sequelize';
import sequelize from '../../../config/database.js'; // Adjust the path as necessary

class User extends Model {}

User.init({
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: DataTypes.STRING,
    type: DataTypes.INTEGER,
    verified: DataTypes.BOOLEAN
}, {
    sequelize,
    modelName: 'User',
});

export default User;
