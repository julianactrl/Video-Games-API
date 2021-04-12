const server = require("express").Router();
const { Videogame, Genre } = require('../db.js');

server.get('/', (req, res) => {
    console.log('Hola')
})

module.exports = server;