/**
 * Manejo de archivos usando NodeJs
 * Implementación usando nodejs:fs
 */

/**
 * Fs Sincrono:
 * 
    - writeFileSync = Para escribir contenido en un archivo. Si el archivo no existe, lo crea. Si existe, lo sobreescribe.
    - readFileSync = Para obtener el contenido de un archivo.
    - appendFileSync = Para añadir contenido a un archivo. ¡No se sobreescribe!
    - unlinkSync = Es el “delete” de los archivos. eliminará todo el archivo, no sólo el contenido.
    - existsSync = Corrobora que un archivo exista!
*/

const fs = require('fs')

const dirName = "./file"
const fileName = dirName + "/ejemplo.txt"
if (!fs.existsSync(dirName)) fs.mkdirSync(dirName);
fs.writeFileSync(fileName, "Hola conders, estoy en un archivo!!")



if (fs.existsSync(fileName)) {
    console.log("Archivo creado con exito en la ruta: " + fs.realpathSync(fileName));
    let contenido = fs.readFileSync(fileName, "utf-8");

    console.log("Leyendo contenido del archivo:");
    console.log(contenido);

    // Agregar mas contenido
    fs.appendFileSync(fileName, " Mas contenido");
    contenido = fs.readFileSync(fileName, "utf-8");
    console.log("Actualizando contenido del archivo:");
    console.log(contenido);

} else {
    console.error("Error creando el archivo.");
}