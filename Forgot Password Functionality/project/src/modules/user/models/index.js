// const fs = require('fs');
// const path = require('path');
// const { Sequelize } = require('sequelize');
// const basename = path.basename(__filename);
// const db = {};

// const sequelize = new Sequelize(process.env.DATABASE_URL || 'sqlite::memory:');

// fs.readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;

import fs from 'fs';
import path from 'path';
import { Sequelize, DataTypes } from 'sequelize';
import { fileURLToPath } from 'url';

// Obtain the current file path and directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const basename = path.basename(__filename);
const db = {};

const sequelize = new Sequelize(process.env.DATABASE_URL || 'sqlite::memory:');

async function loadModels() {
  const files = fs.readdirSync(__dirname).filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  });

  for (const file of files) {
    const model = (await import(path.join(__dirname, file))).default(sequelize, DataTypes);
    db[model.name] = model;
  }

  // Set up associations
  for (const modelName of Object.keys(db)) {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  }

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;

  return db;
}

export default loadModels();
