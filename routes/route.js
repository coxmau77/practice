const express = require('express');
const route = express.Router();
// const connectDb = require('../database/db'); // probar conexion a db

route.get('/', (request, response) => {
    response.render('index', {titulo: 'mi titulo dinamico'});
    // connectDb(); // probar conexion a db
});

route.get('/login', (request, response) => {
    response.render('login');
});

route.get('/register', (request, response) => {
    response.render('register');
});

route.post('/signin', (request, response) => {
    response.render('signin');
});

module.exports = route;