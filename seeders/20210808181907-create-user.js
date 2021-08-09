'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
        firstName: 'Philip',
        lastName: 'Mann',
        email: 'philipmann91@gmail.com',
        password: 'admin1',
        admin: true,
        createdAt: new Date(),
        updatedAt: new Date()
    }], {});
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};