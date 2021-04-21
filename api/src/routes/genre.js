const server = require("express").Router();
const { Genre } = require('../db.js');

server.get('/', async (req, res) => {
    try {
        let genreAll = await Genre.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt', 'videogame_genre'] },
        });
        // let newJoin = genreAll.map((e) => e.name).join(', ')
        // console.log(newJoin)

        res.status(200).send(genreAll);
    }  catch (error) {
        console.error(error);
    }
});

module.exports = server;