import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import { Server } from 'socket.io';
import mongoose from 'mongoose';


import viewRouter from './routes/views.router.js'
import usersRouter from './routes/users.router.js'

const app = express();
const PORT = process.env.PORT || 9090;

//Preparar la configuracion del servidor para recibir objetos JSON.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Confi de HBs
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + "/views");
app.set("view engine", "handlebars");


app.use(express.static(__dirname + "/public"))



app.get('/ping', (req, res) => {
    res.render("index")
})

// Declaramos el router
app.use('/', viewRouter)
app.use('/api/users', usersRouter)



const httpServer = app.listen(PORT, () => {
    console.log(`Server run on port: ${PORT}`);
})



// Conectamos la App_NODEJS <-> MongoAtlas
const uriDB = 'mongodb+srv://<USER>:<PASSWORD>@cluster0.8hkzesl.mongodb.net/clase14?retryWrites=true&w=majority&appName=Cluster0'

const connectMongoDB = async () => {
    try {
        await mongoose.connect(uriDB)
        console.log('Conectado con exito a Mongo Atlas usando Mongoose!!');
    } catch (error) {
        console.error("No se pudo conectar a la BD usando Moongose: " + error);
        process.exit();
    }
}
connectMongoDB()


