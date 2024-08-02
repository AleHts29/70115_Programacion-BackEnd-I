const fs = require('fs').promises // 👈 lib Nativa de NODEJS
const moment = require('moment') // 👈 lib no es Nativa de NODEJS



// Data 
const data = {
    nombre: "Juan Perez",
    edad: 30,
    ciudad: "Madrid",
    fecha: moment().format('YYYY-MM-DD HH:mm:ss')
}

const nombreFile = 'datos.json'

// escritura 
const escribirArchivoJSON = async (fileName, data) => {
    try {
        // convierto a texto plano
        const jsonData = JSON.stringify(data, null, 2) // null, 2 ===> para darle formato

        // guardar en el archivo datos.json
        await fs.writeFile(nombreFile, jsonData, 'utf-8')

        console.log("Archivo JSON creado y contenido agregado");

    } catch (error) {
        console.error(`Error al escribir el archivo: ${error}`);
    }
}



// Lectura
const leerArchivoJSON = async (fileName) => {
    try {
        const data = await fs.readFile(fileName)
        const jsonData = JSON.parse(data)
        console.log("Contenido del archivo JSON");
        console.log(jsonData);
    } catch (error) {
        console.error(`Error al leer el archivo: ${error}`);
    }
}


// func main
const main = async () => {
    await escribirArchivoJSON(nombreFile, data);

    await leerArchivoJSON(nombreFile);
}

main()
