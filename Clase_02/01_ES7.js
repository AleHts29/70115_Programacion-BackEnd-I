//Ejemplo de Array.map()
//Syntax:
// Arrow function
// map((element) => { /* … */ })
// map((element, index) => { /* … */ })
// map((element, index, array) => { /* … */ })

const array = [1, 2, 3, 4, 5]
let exponenciales = array.map((base, indece) => base ** indece)
/** 
 * Toma un arreglo de valores base y con ayuda del operador map(), utiliza el operador exponencial para
 * elevar el valor base por su indice así: (1**0, 2**1, 3**2, 4**3, 5**4, 6**5) 
*/
console.log("Valores del arreglo:");
console.log(array);

console.log("Elevando su valor base por su indice en el arreglo:");
console.log(exponenciales);

//Array.includes: Corrobora si algún elemento existe en el arreglo, retorna un bool:
let nombres = ['Juan', 'Camilo', 'Maria', 'Ana', 'Humberto'];

const nombreBuscado = "camilo"
// console.log(nombres.includes("Camilo"));
if (nombres.includes(nombreBuscado)) {
    console.log(`${nombreBuscado} si existe en el arreglo`);
} else {
    console.log(`${nombreBuscado} No existe en el arreglo`);
}
