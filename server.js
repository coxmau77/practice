const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

// Set EJS para el motor de plantillas
app.set('view engine', 'ejs');

// Set public static
app.use(express.static('public'));

// Para que procese la info que enviaremos de un form
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Enviroment Variables con dotEnvjs
require('dotenv').config({path: './env/.env'});

// Set cookies (mantenerlo comentado hasta que se configure especificamente)
// app.use(cookieParser);

// // test route
// app.get('/', (request, response) => {
//     // response.send('Ruta principal "/" backend');
//     response.render('index');
// });
// Llamamos al enrutador

app.use('/', require('./routes/route'));

app.listen(port, () => {
    console.log(`Servidor ejecutandose en http://localhost:${port}`);
})

