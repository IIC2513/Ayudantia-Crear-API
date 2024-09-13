'use strict'
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Producto extends Model {
    static associate(models) {
      Producto.belongsToMany(models.Stand, {through: 'vendidoEn', foreignKey: 'productoId'});
    }
  }

  Producto.init({
    nombre: DataTypes.STRING,
    precio: DataTypes.FLOAT,
    descripcion: DataTypes.STRING,
    es_alcohol: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Producto',
  });

  return Producto;

};