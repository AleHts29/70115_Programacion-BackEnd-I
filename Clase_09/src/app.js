import express from 'express';
import handlebars from 'express-handlebars'
import viewRouter from './routes/views.router.js'
import __dirname from './utils.js';

const app = express();


// prepara la confiuguracion del servidor para trabajar con archivos JSON
// esto son midleware a nivel a aplicacion
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PORT = 8080;


// Configuraciones HBs
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views/');
app.set('view engine', 'handlebars')

// confi para archivos publicos
app.use(express.static(__dirname + '/public/'))



// Ruta de prueba
app.get('/test-hbs', (req, res) => {
    // creo un obj
    const userTest = {
        name: "Francisco",
        last_name: "reta",
        edad: 28
    }
    // Redirazado en HBs
    res.render('hello', userTest)
})

app.use('/', viewRouter)


// la escucha del server
app.listen(PORT, () => {
    console.log(`Server run on port: ${PORT}`);
})