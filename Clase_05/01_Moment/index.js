const fs = require('fs') // 👈 lib Nativa de NODEJS
const moment = require('moment') // 👈 lib no es Nativa de NODEJS

// Obtener la fecha y hora actual usando moment
const fyh = moment().format('YYYY-MM-DD HH:mm:ss')
const contenido = `Fecha y Hora Actual: ${fyh}`

console.log(contenido);


// Nombre del file
const nameFile = 'fecha_hora.txt'


// func para escritura en el archivo
fs.writeFile(nameFile, contenido, (err) => {
    if (err) {
        return console.log(`Error al escribir en el archivo: ${err}`)
    }

    console.log("Archivo creado y contenido agregado");


    // leer
    fs.readFile(nameFile, 'utf-8', (err, data) => {
        if (err) {
            return console.log(`Error al leer el archivo: ${err}`)
        }

        console.log("Contenido del archivo");
        console.log(data);
    })
})