'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Cases', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      race: {
        type: Sequelize.STRING
      },
      sex: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.STRING
      },
      height: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      body_condition: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.STRING
      },
      images: {
        type: Sequelize.STRING
      },
      cod: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      characteristics: {
        type: Sequelize.STRING
      },
      agencies: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Cases');
  }
};