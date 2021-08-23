'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
        firstName: 'Taylor',
        lastName: 'Guthrie',
        email: 'taylor_g',
        password: 'admin1',
        admin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        loginStrategy: 'Facebook',
        loginStrategyId: '0123456789'
    }], {});
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};