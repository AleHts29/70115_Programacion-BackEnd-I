// const fs = require("fs");
// const dirNameAsync = "./files2";
// const fileNameAsync = dirNameAsync + "/ejemploCallback.txt";

// let data = "Hola Coders, estoy en un archivo! - utilizando callbacks"


// fs.mkdir(dirNameAsync, { recursive: true }, (error) => {
//     if (error) throw Error("No se pudo crear el idirectorio base")

//     // Escritura
//     fs.writeFile(fileNameAsync, data, (error) => {
//         if (error) throw Error("No se pudo escribir el Archivo")
//     })


//     // Lectura del file
//     fs.readFile(fileNameAsync, 'utf-8', (error, contenido) => {
//         if (error) throw Error("No se pudo leer el Archivo")

//         console.log("Contenido del archivo:");
//         console.log(contenido);

//         // Agregar mas contenido
//         fs.appendFile(fileNameAsync, " -- otro mensaje!!", (error) => {
//             if (error) throw Error("No se pudo leer el Archivo")

//             // Lectura
//             fs.readFile(fileNameAsync, "utf-8", (error, contenido) => {
//                 if (error) throw Error("No se pudo leer el archivo!");
//                 console.log("Contenido del archivo como resultado:");
//                 console.log(contenido);
//             })
//         })
//     })
// })



// 2do Ejemplo
