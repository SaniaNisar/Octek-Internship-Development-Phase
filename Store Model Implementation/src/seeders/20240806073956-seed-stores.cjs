'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Stores', [
      {
        name: 'TechStore',
        slug: 'techstore',
        logoUrl: 'https://example.com/logo1.png',
        externalId: 'EXTERNAL123',
        theme: JSON.stringify({
          primaryColor: '#FF5733',
          secondaryColor: '#C70039',
          textColor: '#900C3F'
        }),
        subscription: 1,
        status: 'active',
        userId: 1,  // Replace with a valid userId
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'GadgetShop',
        slug: 'gadgetshop',
        logoUrl: 'https://example.com/logo2.png',
        externalId: 'EXTERNAL124',
        theme: JSON.stringify({
          primaryColor: '#33FF57',
          secondaryColor: '#39C700',
          textColor: '#3F900C'
        }),
        subscription: 1,
        status: 'active',
        userId: 2,  // Replace with a valid userId
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'FashionBoutique',
        slug: 'fashionboutique',
        logoUrl: 'https://example.com/logo3.png',
        externalId: 'EXTERNAL125',
        theme: JSON.stringify({
          primaryColor: '#5733FF',
          secondaryColor: '#0039C7',
          textColor: '#0C3F90'
        }),
        subscription: 0,
        status: 'inactive',
        userId: 3,  // Replace with a valid userId
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'BookWorld',
        slug: 'bookworld',
        logoUrl: 'https://example.com/logo4.png',
        externalId: 'EXTERNAL126',
        theme: JSON.stringify({
          primaryColor: '#FFD700',
          secondaryColor: '#FF8C00',
          textColor: '#FF4500'
        }),
        subscription: 1,
        status: 'active',
        userId: 4,  // Replace with a valid userId
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'BeautySpot',
        slug: 'beautyspot',
        logoUrl: 'https://example.com/logo5.png',
        externalId: 'EXTERNAL127',
        theme: JSON.stringify({
          primaryColor: '#FF1493',
          secondaryColor: '#FF69B4',
          textColor: '#FFB6C1'
        }),
        subscription: 0,
        status: 'inactive',
        userId: 5,  // Replace with a valid userId
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'SportsArena',
        slug: 'sportsarena',
        logoUrl: 'https://example.com/logo6.png',
        externalId: 'EXTERNAL128',
        theme: JSON.stringify({
          primaryColor: '#228B22',
          secondaryColor: '#32CD32',
          textColor: '#98FB98'
        }),
        subscription: 1,
        status: 'active',
        userId: 6,  // Replace with a valid userId
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'HomeEssentials',
        slug: 'homeessentials',
        logoUrl: 'https://example.com/logo7.png',
        externalId: 'EXTERNAL129',
        theme: JSON.stringify({
          primaryColor: '#8B4513',
          secondaryColor: '#A0522D',
          textColor: '#CD853F'
        }),
        subscription: 0,
        status: 'inactive',
        userId: 7,  // Replace with a valid userId
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'PetParadise',
        slug: 'petparadise',
        logoUrl: 'https://example.com/logo8.png',
        externalId: 'EXTERNAL130',
        theme: JSON.stringify({
          primaryColor: '#4682B4',
          secondaryColor: '#5F9EA0',
          textColor: '#B0C4DE'
        }),
        subscription: 1,
        status: 'active',
        userId: 8,  // Replace with a valid userId
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'MusicHub',
        slug: 'musichub',
        logoUrl: 'https://example.com/logo9.png',
        externalId: 'EXTERNAL131',
        theme: JSON.stringify({
          primaryColor: '#9400D3',
          secondaryColor: '#8A2BE2',
          textColor: '#9932CC'
        }),
        subscription: 0,
        status: 'inactive',
        userId: 9,  // Replace with a valid userId
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'TravelGear',
        slug: 'travelgear',
        logoUrl: 'https://example.com/logo10.png',
        externalId: 'EXTERNAL132',
        theme: JSON.stringify({
          primaryColor: '#00CED1',
          secondaryColor: '#20B2AA',
          textColor: '#40E0D0'
        }),
        subscription: 1,
        status: 'active',
        userId: 10,  // Replace with a valid userId
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Stores', null, {});
  }
};
