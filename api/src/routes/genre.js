const server = require("express").Router();
const { Genre } = require('../db.js');

server.get('/', async (req, res) => {
    try {
        let genreAll = await Genre.findAll();
        res.status(200).send(genreAll);
    }  catch (error) {
        console.error(error);
    }
});

module.exports = server;