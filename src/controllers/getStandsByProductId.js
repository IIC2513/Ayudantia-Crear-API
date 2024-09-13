const { vendidoEn, Stand, Producto } = require('../models');

const getStandsByProductId = async (productId) => {
  try {
    const producto = await Producto.findByPk(productId);

    if (!producto) {
      return {
        status: 404,
        message: 'Producto no encontrado',
      };
    }

    const vendidoEnEntries = await vendidoEn.findAll({
      where: {
        productoId: producto.id,
      },
    });

    const standsId = vendidoEnEntries.map((v) => v.standId);

    if (standsId.length === 0) {
      return {
        status: 404,
        message: 'No hay stands asociados a este producto',
      };
    }

    const stands = await Stand.findAll({
      where: {
        id: standsId,
      },
    });

    return stands;
  } catch (error) {
    return {
      status: 500,
      message: 'Error en el servidor',
      error: error.message, 
    };
  }
};

module.exports = getStandsByProductId;
