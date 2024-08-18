'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        email: 'user1@example.com',
        password: '$2b$10$Wz8Iq8Jd1NJN0s56uPfhKuB9u.tfpq/AqvO1CzhoG6vX5yb2LC/XO', // hashed password
        name: 'User One',
        type: 0,
        verified: false,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        email: 'user2@example.com',
        password: '$2b$10$Wz8Iq8Jd1NJN0s56uPfhKuB9u.tfpq/AqvO1CzhoG6vX5yb2LC/XO', // hashed password
        name: 'User Two',
        type: 0,
        verified: false,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        email: 'user3@example.com',
        password: '$2b$10$Wz8Iq8Jd1NJN0s56uPfhKuB9u.tfpq/AqvO1CzhoG6vX5yb2LC/XO', // hashed password
        name: 'User Three',
        type: 0,
        verified: false,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        email: 'user4@example.com',
        password: '$2b$10$Wz8Iq8Jd1NJN0s56uPfhKuB9u.tfpq/AqvO1CzhoG6vX5yb2LC/XO', // hashed password
        name: 'User Four',
        type: 0,
        verified: false,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        email: 'user5@example.com',
        password: '$2b$10$Wz8Iq8Jd1NJN0s56uPfhKuB9u.tfpq/AqvO1CzhoG6vX5yb2LC/XO', // hashed password
        name: 'User Five',
        type: 0,
        verified: false,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        email: 'user6@example.com',
        password: '$2b$10$Wz8Iq8Jd1NJN0s56uPfhKuB9u.tfpq/AqvO1CzhoG6vX5yb2LC/XO', // hashed password
        name: 'User Six',
        type: 0,
        verified: false,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        email: 'user7@example.com',
        password: '$2b$10$Wz8Iq8Jd1NJN0s56uPfhKuB9u.tfpq/AqvO1CzhoG6vX5yb2LC/XO', // hashed password
        name: 'User Seven',
        type: 0,
        verified: false,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        email: 'user8@example.com',
        password: '$2b$10$Wz8Iq8Jd1NJN0s56uPfhKuB9u.tfpq/AqvO1CzhoG6vX5yb2LC/XO', // hashed password
        name: 'User Eight',
        type: 0,
        verified: false,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        email: 'user9@example.com',
        password: '$2b$10$Wz8Iq8Jd1NJN0s56uPfhKuB9u.tfpq/AqvO1CzhoG6vX5yb2LC/XO', // hashed password
        name: 'User Nine',
        type: 0,
        verified: false,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        email: 'user10@example.com',
        password: '$2b$10$Wz8Iq8Jd1NJN0s56uPfhKuB9u.tfpq/AqvO1CzhoG6vX5yb2LC/XO', // hashed password
        name: 'User Ten',
        type: 0,
        verified: false,
        createdAt:new Date(),
        updatedAt:new Date()

      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    // Here you might want to provide logic to revert the seed if necessary
    await queryInterface.bulkDelete('Users', null, {});
  }
};
