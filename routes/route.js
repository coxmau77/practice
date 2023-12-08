const express = require('express');
const route = express.Router();

route.get('/', (request, response) => {
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