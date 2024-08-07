// hacemos el import de las libs
import express from 'express';

// Declaramos express
const app = express();
const PORT = 8080;


// Middleware a nivel de App para poder unsar los req.query
app.use(express.urlencoded({ extended: true }))

// Declaramos el Endpoint
// app.get("nombre Enpoint", "Callback")
app.get("/init", (req, res) => {
    res.send({ status: "ok", msg: "Hola usando express" })
})



/*=============================================
=         Usando req.params                  =
=============================================*/
app.get("/usuario/:nombre/:apellido", (req, res) => {
    console.log(req.params);

    res.send(`Hola, tu nombre completo es: ${req.params.nombre} ${req.params.apellido}`)
})

// Simulamos DB
const usuarios = [
    { id: 1, nomnbre: "Juan", apellido: "Torres", edad: "X", genero: "M" },
    { id: 2, nomnbre: "Carlos", apellido: "Garcia", edad: "20", genero: "M" },
    { id: 3, nomnbre: "Maria", apellido: "Torres", edad: "15", genero: "F" },
    { id: 4, nomnbre: "Patricia", apellido: "Ramirez", edad: "30", genero: "F" }
];

app.get('/usuarios', (req, res) => {
    res.send(usuarios)
})

app.get('/usuarios/:userId', (req, res) => {
    let { userId } = req.params
    console.log(typeof userId);

    // hacemos la busqueda
    const usuario = usuarios.find(u => u.id === parseInt(userId))
    if (usuario) {
        res.json({ status: "Success", user: usuario })
    }
    res.send(`Usuario no encontrado`)
})


/*=============================================
=         Usando req.query                 =
=============================================*/

const data = []
app.get('/ejemploQueries/query', (req, res) => {
    let datos = req.query
    data.push(datos)
    res.send(datos)
})

app.get('/consulta/query', (req, res) => {
    res.send(data)
})

// http://localhost:8080/consulta-usuario/query?genero=F
app.get('/consulta-usuario/query/{genero}', (req, res) => {
    let { genero } = req.query

    if (genero) {
        res.send(usuarios.filter(u => u.genero === genero))
    }

    res.send(usuarios)
})




// poner el servidor a que escuche
app.listen(PORT, () => {
    console.log(`Server run on port: ${PORT}`);
})