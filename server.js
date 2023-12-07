const express = require('express');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();
const port = 3000;


// test route
app.get('/', (request, response) => {
    response.send('Ruta principal "/" backend');
});

app.listen(port, () => {
    console.log(`Servidor ejecutandose en http://localhost:${port}`);
})

