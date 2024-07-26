// // declaracion tradicional 
// function mensajeInit() {
//     // bloque de logica
//     console.log("Hola, func tradicional");
// }
// // como ejecutamos
// mensajeInit()


// // reasignar una funcion a una variable
// let mensaje = function () {
//     // bloque de logica
//     console.log("Hola, func reasignada");
// }
// mensaje()


// // Funciones no definidas
// (function () {
//     // aqui va bloque de logica
//     console.log("Funcion anonima");
// })();

// setTimeout(function () {
//     console.log("Esto se ejecuta despues de 1s");
// }, 1000);



// Ejemplo Funciones bloqueantes
function funA() {
    console.log(1);
    funB()
    console.log(2);
}

function funB() {
    console.log(3);
    funC()
    console.log(4);
}

function funC() {
    console.log(5);
}

funA()