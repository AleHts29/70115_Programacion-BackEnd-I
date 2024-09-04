/*
- Se creará una base de datos llamada “baseCRUD”.
- Se agregará una colección llamada “mascotas”
- Se agregarán 3 mascotas con las propiedades: nombre, especie, edad
- Se buscarán mascotas por su especie
Contar el número de mascotas totales agregadas

*/

db.mascotas.insertMany(
    [
        { nombre: "Homero", especie: "perro", edad: "4" },
        { nombre: "Lulu", especie: "gato", edad: "1" },
        { nombre: "Nemo", especie: "pez", edad: "1" }
    ]
)



// 02
/*
Sobre una base de datos llamada “colegio”, crear una colección “estudiantes” donde se agregarán documentos con los siguientes datos:
nombre
apellido
curso
edad
correo
sexo 
Crear 5 estudiantes (Insert Many) con los campos mencionados arriba. Además, crear un estudiante sólo con nombre, apellido y curso. ¿Es posible?



Realizar una búsqueda para obtener a todos los estudiantes.
Realizar una búsqueda para obtener a todos los estudiantes de sexo H (hombre)
Realizar un conteo para obtener el número de documentos totales.
Realizar un conteo para obtener el número de documentos totales que cumplan con el criterio: “Es mujer”

*/

colegio > db.createCollection('estudiantes')

// Creamos los documentos
db.estudiantes.insertMany([
    { nombre: "Elias", apellido: "Lopez", curso: "backend", correo: "eli@gmail.com", genero: "M", edad: 30 },
    { nombre: "Laura", apellido: "Suarez", curso: "marketing", correo: "laura@gmail.com", genero: "F", edad: 23 },
    { nombre: "German", apellido: "Caicedo", curso: "backend", correo: "german@gmail.com", genero: "M", edad: 27 },
    { nombre: "Pedro", apellido: "David", curso: "backend", correo: "pedro@gmail.com", genero: "M", edad: 22 },
    { nombre: "Maria", apellido: "Dutra", curso: "react", correo: "maria@gmail.com", genero: "F", edad: 35 }
]);


db.estudiantes.insertMany([
    { nombre: "Pedro", apellido: "Lopez", curso: "backend" },
    { nombre: "David", apellido: "Reta", curso: "marketing" }
]);


// Busqueda de data
colegio > db.estudiantes.find()

// Busqueda por criterio
colegio > db.estudiantes.find({ genero: 'M' })

// Conteo de documentos
colegio > db.estudiantes.count()

// Realizar un conteo para obtener el número de documentos totales que cumplan con el criterio: “Es mujer”
colegio > db.estudiantes.count({ genero: "F" })



// FILTROS Avanzados
// Filtrar estudiantes que están en el curso "backend" y tienen más de 25 años:
db.estudiantes.find({
    $and: [
        { curso: "backend" },
        { edad: { $gt: 25 } }
    ]
})


// Filtrar estudiantes que están en el curso "backend" o "react":
db.estudiantes.find({
    $or: [
        { curso: "backend" },
        { curso: "react" }
    ]
})


// Filtrar estudiantes que tienen menos de 30 años:
db.estudiantes.find({
    edad: { $lt: 30 }
})


// Filtrar estudiantes que no están en el curso "marketing":
db.estudiantes.find({
    curso: { $ne: "marketing" }
})



// Filtrar estudiantes cuyo género es "F" y tienen 25 años o más:
db.estudiantes.find({
    $and: [
        { genero: "F" },
        { edad: { $gte: 25 } }
    ]
})
// Filtrar estudiantes cuyo apellido es "Lopez" o tienen menos de 25 años:
db.estudiantes.find({
    $or: [
        { apellido: "Lopez" },
        { edad: { $lt: 25 } }
    ]
})



// Proyecciones
colegio > db.estudiantes.find({}, { nombre: 1, correo: 1 })



// Ofset --> Mueve el punto de referencia (arranca desde 0)
colegio > db.estudiantes.find().skip(2)


// Limit --> Limita el numero de registros a mostrar
colegio > db.estudiantes.find().limit(2)


// UPDATEbyID
colegio > db.estudiantes.updateOne({ _id: ObjectId('66d0fe20085c5c4c4f394e4c') }, { $set: { apellido: 'Gonzalez' } })


// FindByID
colegio > db.estudiantes.find({ _id: ObjectId('66d0fe20085c5c4c4f394e4c') })

// DELETE
colegio > db.estudiantes.deleteOne({ _id: ObjectId('66d0fe20085c5c4c4f394e4d') })