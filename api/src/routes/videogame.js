require("dotenv").config();
const { GAMES_ALL, API_KEY } = process.env;
const axios = require("axios");
const server = require("express").Router();
const { Videogame, Genre } = require("../db.js");

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

server.get("/", async (req, res, next) => {
  try {
    await axios
      .get(`${GAMES_ALL}${API_KEY}`)
      .then((g) => {
        const result = g.data.results;
        const apiSliceResult = result.slice(0, 15)
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

// const gamesDb = await Videogame.findAll(); //{ include: [Genre] }
// getAllGames = getAllGames.concat(gamesDb);
// console.log("Soy games db", gamesDb);

module.exports = server;
