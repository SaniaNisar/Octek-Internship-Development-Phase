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
