import { Model, DataTypes } from 'sequelize';
import sequelize from '../../../config/database.js'; 

class Store extends Model {}

Store.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    logoUrl: {
        type: DataTypes.STRING,
        allowNull: true
    },
    externalId: {
        type: DataTypes.STRING,
        allowNull: true
    },
    theme: {
        type: DataTypes.JSON,
        allowNull: true
    },
    subscription: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0 
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'inactive' 
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users', 
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    }
}, {
    sequelize,
    modelName: 'Store',
    tableName: 'Stores', 
    timestamps: true, // Automatically adding `createdAt` and `updatedAt` 
});

export default Store;
