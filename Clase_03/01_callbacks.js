//Usemos un arreglo de prueba:
let valoresOriginales = [1, 2, 3, 4, 5];

// let nuevosValores = valoresOriginales.map((x, i) => x + i)
// let nuevosValores = valoresOriginales.map(x => x + 1)
// console.log(nuevosValores);


// 01_ otras operaciones
// let nuevosValores = valoresOriginales.map(x => 'a')
// console.log(nuevosValores);

// 02_ Que pasa si declaramos el callback fuera?
// const mapCallback = (valor) => {
//     if (valor % 2 === 0) {
//         return valor;
//     } else {
//         return "No es par!"
//     }
// }
// let nuevosValores = valoresOriginales.map(mapCallback)

// let nuevosValores = valoresOriginales.map((valor) => {
//     if (valor % 2 === 0) {
//         return valor;
//     } else {
//         return "No es par!"
//     }
// })

// console.log(nuevosValores);


// 03_ Recrear un callback de funcion map:
// //Usemos un arreglo de prueba:
let arregloDePrueba = [1, 2, 3, 4, 5];


// // .map original
// const callbackTest = x => x * 2;
// console.log('.map original');
// console.log(arregloDePrueba.map(callbackTest));


// // creamos nuestra version de .map
// const miFuncionMap = (arreglo, callback) => {
//     // bloque de logica
//     let newArray = []
//     for (let i = 0; i < arreglo.length; i++) {
//         let newValor = callback(arreglo[i])
//         newArray.push(newValor)
//     }
//     return newArray;
// }

// let nuevoArregloPropio = miFuncionMap(arregloDePrueba, x => x * 2)
// console.log('miFuncionMap');
// console.log(nuevoArregloPropio);



//Extra: Podemos agregar nuestra funcion al arreglo como tal, usando el prototype del objeto Array:
Array.prototype.miFuncionMap = function (callback) {
    let nuevoArreglo = []
    for (let i = 0; i < this.length; i++) {
        let nuevoValor = callback(this[i]);
        nuevoArreglo.push(nuevoValor);
    }
    return nuevoArreglo;
}
console.log(arregloDePrueba.miFuncionMap(x => x * 2));
console.log(arregloDePrueba.map(x => x * 2));


/*=============================================
=                   Callback con Op           =
=============================================*/

// Función de devolución de llamada 1
function uno(callback) {
    setTimeout(function () {
        console.log("Uno");
        callback()
    }, 1000)
}

// Función de devolución de llamada 2
function dos(callback) {
    setTimeout(function () {
        console.log("Dos");
        callback()
    }, 1000)
}

// Función de devolución de llamada 3
function tres(callback) {
    setTimeout(function () {
        console.log("Tres");
        callback()
    }, 1000)
}


// Uso de las funciones de devolución de llamada anidadas

uno(function () {
    dos(function () {
        tres(function () {
            console.log("Fin del callback Hell");
        })
    })
})