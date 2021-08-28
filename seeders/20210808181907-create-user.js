'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
        firstName: 'Taylor',
        lastName: 'Guthrie',
        email: 'taylor_g',
        password: 'admin1',
        admin: true,
        loginStrategy: 'Facebook',
        loginStrategyId: '0123456789',
        createdAt: new Date(),
        updatedAt: new Date()
    }], {});
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};