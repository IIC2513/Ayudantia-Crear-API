'use strict'
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Stand extends Model {
    static associate(models) {
      Stand.belongsTo(models.Fonda, {
        foreignKey: 'fondaId',
        as: 'fonda',
      });
      Stand.belongsToMany(models.Producto, {through: 'vendidoEn', foreignKey: 'standId'});
    }
  }

  Stand.init({
    nombre: DataTypes.STRING,
    fondaId: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Stand',
  });

  return Stand;

}