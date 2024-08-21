import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import { Server } from 'socket.io';
import viewRouter from './routes/views.router.js'

const app = express();
const PORT = 9090;

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



const httpServer = app.listen(PORT, () => {
    console.log(`Server run on port: ${PORT}`);
})


// Abrimos el canal de comunicacion del lado del server

const socketServer = new Server(httpServer)



const logs = [];
socketServer.on('connection', socket => {
    // TODO: Toda la logica referente sockets va aqui dentro

    console.log('Nuevo cliente conectado');


    socket.on('mensaje', data => {
        console.log(data);
    })

    // Enviamos mensaje al cliente
    socket.emit('msg_02', "Hola soy el server!!")


    // Usando broadcast
    socket.broadcast.emit("broadcast", "Este evento es para todos los sockets, menos el socket desde que se emitió el mensaje!");



    socketServer.emit('msg_todos', "Todos ven este msg")


    // socket.on('message1', data => {
    //     console.log(data);
    //     socketServer.emit('log', data)
    // })


    //Ejercicio 2

    // Message2 se utiliza para la parte de almacenar y devolver los logs completos.
    socket.on("message2", data => {
        logs.push({ socketid: socket.id, message: data })
        socketServer.emit('log', { logs });
    });

})
