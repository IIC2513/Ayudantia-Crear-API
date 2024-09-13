const Router = require('koa-router');
/* Llama aquí a las rutas */

const router = new Router();

/* Rutas */

router.get('/', async (ctx) => {
    ctx.body = 'Hello, world!';
  });
  
module.exports = router;
