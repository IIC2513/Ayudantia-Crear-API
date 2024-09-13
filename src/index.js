const dotenv = require('dotenv');
const app = require('./app.js');
const db = require('./models');

dotenv.config();

const PORT = process.env.PORT || 3000;

db.sequelize
  .authenticate()
  .then(() => {
    console.log('La conexión a la base de datos ha sido exitosa');
    app.listen(PORT, (err) => {
      if (err) {
        return console.error('Falló la conexión', err);
      }
      console.log(`Escuchando en el puerto ${PORT}`);
      return app;
    });
  })
  .catch((err) => console.error('No se ha podido establecer la conexión', err));
