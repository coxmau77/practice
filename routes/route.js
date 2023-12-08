const express = require('express');
const route = express.Router();
const connectDb = require('../database/db');

route.get('/', (request, response) => {
    connectDb(); // probar conexion a db
    response.render('index');
});

route.get('/login', (request, response) => {
    response.render('login');
});

route.get('/register', (request, response) => {
    response.render('register');
});

route.get('/signin', (request, response) => {
    response.render('signin');
});

module.exports = route;