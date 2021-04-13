require("dotenv").config();
const { GAMES_ALL, SEARCH_GAMES, GAMES_ID, API_KEY } = process.env;
const axios = require("axios");
const server = require("express").Router();
const { Videogame, Genre } = require("../db.js");
const { Op } = require("sequelize");
// server.get("/", async (req, res, next) => {
//   const games_api = axios.get(`${GAMES_ALL}${API_KEY}`)
//   const genre_db = Videogame.findAll()
//   Promise.all([games_api, genre_db])
//   .then(r => {
//     let [games_api_r, genre_db_r] = r
//     return res.send(
//       genre_db_r.concat(games_api_r.data.results)
//     )
//     .catch(err => next(err))
//   })
// });

// [ X ] GET /videogames:
// Obtener un listado de los primeras 15 videojuegos
// Debe devolver solo los datos necesarios para la ruta principal
server.get("/", async (req, res, next) => {
  try {
    await axios
      .get(`${GAMES_ALL}${API_KEY}`)
      .then((g) => {
        const result = g.data.results;
        const apiSliceResult = result.slice(0, 15);
        let gamesApi = apiSliceResult.map((game) => {
          return {
            id: game.id,
            name: game.name,
            image: game.background_image,
            rating: game.rating,
            released: game.released,
            platforms: game.platforms.map((p) => p.platform.name).join(", "),
            genres: game.genres.map((g) => g.name).join(", "),
          };
        });
        res.status(200).send(gamesApi);
      })
      .catch((err) => next(err));
  } catch (err) {
    next(err);
  }
});

/* 
[ ] GET /videogames?name="...":
Obtener un listado de las primeros 15 videojuegos que contengan la palabra ingresada como query parameter
Si no existe ningún videojuego mostrar un mensaje adecuado
*/
server.get("/search", async (req, res, next) => {
  const { game } = req.query || "";
  console.log("SOY LA QUERY", game);
  await axios
    .get(`${SEARCH_GAMES}${game}&key=${API_KEY}`)
    .then(async (query) => {
      try {
        let gameDb = await Videogame.findAll({
          where: {
            name: {
              [Op.iLike]: `%${game}%`,
            },
          },
        });
        const queryResultName = query.data.results;
        const apiSliceQuery = queryResultName.slice(0, 15);
        let gamesNameApi = apiSliceQuery.map((query) => {
          return {
            id: query.id,
            name: query.name,
            image: query.background_image,
            rating: query.rating,
            released: query.released,
            platforms: query.platforms.map((p) => p.platform.name).join(", "),
            genres: query.genres.map((g) => g.name).join(", "),
          };
        });

        res.json(gamesNameApi.concat(gameDb));
      } catch (err) {
        console.error(err);
        res.json({ message: "ERROR: GAME NOT FOUNT" });
      }
    })
    .catch((err) => next(err));
});

/* 
GET /videogame/{idVideogame}__:
  - Obtener el detalle de un videojuego en particular
  - Debe traer solo los datos pedidos en la ruta de detalle de videojuego
  - Incluir los géneros asociados
  Ruta de detalle de videojuego: debe contener

[ ] Los campos mostrados en la ruta principal para cada videojuegos (imagen, nombre, y géneros)
[ ] Descripción
[ ] Fecha de lanzamiento
[ ] Rating
[ ] Plataformas
*/
server.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
  //  console.log(id);
    const gameIdDb = await Videogame.findOne({
      where: { id: id },
      include: [Genre],
    });
    if (!gameIdDb) {
      await axios
        .get(`${GAMES_ID}${id}?key=${API_KEY}`)
        .then((index) => {
          let apiGameRes = index.data;
         // console.log(apiGameRes);
          const newGameObj = {
            id: apiGameRes.id,
            name: apiGameRes.name,
            description: apiGameRes.description,
            image: apiGameRes.background_image,
            rating: apiGameRes.rating,
            released: apiGameRes.released,
            platforms: apiGameRes.platforms
              .map((p) => p.platform.name)
              .join(", "),
            genres: apiGameRes.genres.map((g) => g.name).join(", "),
          };
          res.send(newGameObj);
        })
        .catch((err) => next(err));
    } else {
      res.send(gameIdDb);
    }
  } catch (err) {
    next(err);
  }
});

/* 
POST /videogame__:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de videojuego por body
  - Crea un videojuego en la base de datos
  Ruta de creación de videojuegos: debe contener

[ ] Un formulario controlado con los siguientes campos
Nombre
Descripción
Fecha de lanzamiento
Rating
[ ] Posibilidad de seleccionar/agregar varios géneros
[ ] Posibilidad de seleccionar/agregar varias plataformas
[ ] Botón/Opción para crear un nuevo videojuego
*/

server.post('/', async (req, res, next) => {
  const { name, description, released, rating, platforms } = req.body
  let gamePost = await Videogame.create({
    name,
    description,
    released,
    rating,
    platforms
  })
  res.send(gamePost)
})

// const gamesDb = await Videogame.findAll(); //{ include: [Genre] }
// getAllGames = getAllGames.concat(gamesDb);
// console.log("Soy games db", gamesDb);

module.exports = server;
