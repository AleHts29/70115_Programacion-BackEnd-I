// mutabilidad de los arrays y objetos

const array = [1, 2, 3, 4]
array.push(5)

const obj = { nombre: 'Juan' }
obj.apellido = "Perez"

// console.log(obj);



// scope de las variables
const testScope = function () {
    let i = 0



    //creamos un bloque
    if (true) {
        const variable = 12
        console.log(variable); // 12

        let i = 5
        console.log(i); // ?
    }

    console.log(variable); // me da error
    console.log(i); // 0
}

// testScope()




/*=============================================
=                   Constantes               =
=============================================*/
let obj1 = {
    name: "Nico",
    edad: 25
}
console.log("obj1", obj1);


// const obj2 = obj1 // obj2 apunta a la misma direccion de meria de obj1
const obj2 = { ...obj1 } // genera una copia y ya no apunta a la posicion de mem de obj1
console.log("obj2", obj2);

obj2.name = "Alex"
obj2.pais = "Arg"

console.log("obj1", obj1);
console.log("obj2", obj2);



/*=============================================
=                   Funtions                 =
=============================================*/
// const suma = (a, b) => {
//     let result
//     result = a + b;

//     return result
// }

// un posible refactor de la funcion suma
const suma = (a, b) => a + b

console.log(`El resultado de la suma es: ${suma(3, 5)}`);


