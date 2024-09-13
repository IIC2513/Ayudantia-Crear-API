'use strict'
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Fonda extends Model {
    static associate(models) {
      Fonda.hasMany(models.Stand, {
        foreignKey: 'fondaId',
        as: 'stands',
      });
    }
  }

  Fonda.init({
    nombre: DataTypes.STRING,
    ubicacion: DataTypes.STRING,
    capacidad: DataTypes.INTEGER,
    }, {
        
    sequelize,
    modelName: 'Fonda',
  });

  return Fonda;

}