const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogameRouter = require('./videogame.js');
const genreRouter = require('./genre')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogames', videogameRouter);
router.use('/genres', genreRouter);

module.exports = router;
