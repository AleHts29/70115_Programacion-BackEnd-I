import express from 'express';


const app = express();


// prepara la confiuguracion del servidor para trabajar con archivos JSON
// esto son midleware a nivel a aplicacion
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PORT = 9090

// vericamos que el server este ok
app.get('/ping', (req, res) => {
    res.send('pong')
})


// sumulamos una DB --> guardamos datos en memoria
let users = []


/*=============================================
=                   APIs                     =
=============================================*/
// GET
app.get('/api/users', (req, res) => {
    res.send(users)
})

// POST
app.post('/api/users', (req, res) => {
    let user = req.body
    console.log(user);

    // Asignamos un id
    const newId = Math.floor(Math.random() * 1000 + 1)
    user.id = newId + users.length

    // validamos 
    if (!user.first_name || !user.last_name) {
        return res.status(400).send({ status: "error", msg: "Valores incompletos" })
    }

    users.push(user)

    res.send({ status: "success", msg: "Usuario creado!!!" })
})

// PUT
app.put('/api/users/:userId', (req, res) => {
    let userId = parseInt(req.params.userId)

    let userUpdate = req.body

    const userPosition = users.findIndex((u => u.id === userId))

    if (userPosition < 0) {
        return response.status(202).send({ status: "info", error: "Usuario no encontrado" });
    }

    users[userPosition] = userUpdate


    res.send({ status: "success", msg: "Usuario Actualizado!!!", payload: users[userPosition] })
})

// DELETE
app.delete('/api/users/:userId', (req, res) => {
    let userId = parseInt(req.params.userId)

    // Tamanio inicial del array
    const usersSizes = users.length

    const userPosition = users.findIndex((u => u.id === userId))
    if (userPosition < 0) {
        return response.status(202).send({ status: "info", error: "Usuario no encontrado" });
    }

    // eliminamos el registro
    users.splice(userPosition, 1);

    if (users.length === usersSizes) {
        return response.status(500).send({ status: "error", error: "Usuario no se pudo elimnar" });
    }

    res.send({ status: "success", msg: "Usuario Eliminado!!!" })
})



// la escucha del server
app.listen(PORT, () => {
    console.log(`Server run on port: ${PORT}`);
})