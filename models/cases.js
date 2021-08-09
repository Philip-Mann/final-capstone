'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cases extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Cases.init({
    name: DataTypes.STRING,
    race: DataTypes.STRING,
    sex: DataTypes.STRING,
    age: DataTypes.STRING,
    height: DataTypes.STRING,
    location: DataTypes.STRING,
    body_condition: DataTypes.STRING,
    year: DataTypes.STRING,
    images: DataTypes.STRING,
    cod: DataTypes.STRING,
    description: DataTypes.TEXT,
    characteristics: DataTypes.STRING,
    agencies: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cases',
  });
  return Cases;
};