'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class vendidoEn extends Model {
    static associate(models) {
      vendidoEn.belongsTo(models.Producto, {foreignKey: 'productoId'});
      vendidoEn.belongsTo(models.Stand, {foreignKey: 'standId'});
    }
  }

  vendidoEn.init({}, {
    sequelize,
    modelName: 'vendidoEn',
  });

  return vendidoEn;

};
