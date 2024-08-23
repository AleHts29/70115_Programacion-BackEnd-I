import express from 'express';
import userRoutes from './routes/users.routes.js'
import petsRoutes from './routes/pets.routes.js'

import __dirname from './utils.js';

const app = express();


// prepara la confiuguracion del servidor para trabajar con archivos JSON
// esto son midleware a nivel a aplicacion
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



// Middleware a nivel de App
app.use(function (req, res, next) {
    console.log("Mi primer Middleware a ni nivel de APP");
    console.log("Time: " + Date().toLocaleString());

    // para salir del MD
    next()
})




// Le indicamos al server que el direectorio public es publico
// console.log(__dirname);

app.use(express.static(__dirname + '/public'))

const PORT = 9090


// Routers
app.use('/api/user', userRoutes)
app.use('/api/pet', petsRoutes)


// la escucha del server
app.listen(PORT, () => {
    console.log(`Server run on port: ${PORT}`);
})