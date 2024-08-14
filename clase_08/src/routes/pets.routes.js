import { Router } from 'express'
import { uploader } from '../utils.js'



const router = Router();

// Las Apis

let pets = []


// Middleware

// GET
router.get('/', (req, res) => {
    res.send(pets)
})

// POST
router.post('/', (req, res) => {
    let pet = req.body
    console.log(pet);

    // Asignamos un id
    const newId = Math.floor(Math.random() * 1000 + 1)
    pet.id = newId + pets.length

    // validamos 
    if (!pet.nombre || !pet.especie) {
        return res.status(400).send({ status: "error", msg: "Valores incompletos" })
    }

    pets.push(pet)

    res.send({ status: "success", msg: "Mascota creado!!!" })
})



/*=============================================
=                   Section_02                =
=============================================*/
// middleware a nivel de router
router.use(function (req, res, next) {
    console.log("Mi primer Middleware a ni nivel de ROUTER!!!");
    // para salir del MD
    next()
})


// Aplicando Middleware
function miMiddleware(req, res, next) {
    console.log("llama a mi middleware..");
    next();
};

router.get('/test', (req, res) => {
    res.send("pets")
})

router.get('/middleware', miMiddleware, (req, res) => {
    console.log("Mascotas actuales: ");
    console.log(pets);
    res.send(pets);
})




/*=============================================
=                   Section_03                =
=============================================*/
// MULTER
router.post('/profile', uploader.single('file'), (req, res) => {
    if (!req.file) {
        return response.status(400).send({ status: "error", mensaje: "No se adjunto archivo." });
    }

    console.log(req.file);


    // Persistimos una mascota con su foto
    let pet = req.body
    pet.id = Math.floor(Math.random() * 20 + 1);
    pet.image = req.file.path;


    // validamos 
    if (!pet.nombre || !pet.especie) {
        return res.status(400).send({ status: "error", msg: "Valores incompletos" })
    }

    pets.push(pet)

    res.send({ status: "success", msg: "Mascota creado!!!" })
})









export default router;