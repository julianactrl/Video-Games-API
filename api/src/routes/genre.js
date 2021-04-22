const server = require("express").Router();
const { Genre } = require('../db.js');

server.get('/', async (req, res, next) => {
    try {
        let genreAll = await Genre.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt', 'videogame_genre'] },
        });
       
        res.status(200).send(genreAll);
    }  catch (error) {
        next(error);
    }
});

module.exports = server;