const mysql = require('mysql');

const connectDb = mysql.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME,
    port: process.env.DB_PORT
});


connectDb.connect(error => {
    if (error) {
        console.log(`Error de conexion --> ${error}`);
        return
    }
    console.log('MySQL conectado ok!');
});

module.exports = connectDb