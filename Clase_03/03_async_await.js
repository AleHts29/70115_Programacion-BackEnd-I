//Promesas
const dividirConPromesa = (dividendo, divisor) => {
    return new Promise((resolve, reject) => { //resolve y reject son funciones callback igualmente.
        console.log(`Recibiendo promesa para dividir: ${dividendo} / ${divisor}`);

        // if (divisor === 0) {
        //     reject("No se puede dividir por cero.");//La promesa no se puede cumplir para este caso...
        // } else {
        //     resolve(dividendo / divisor); //OJO le estoy pasando el valor resultado de esta operación, 
        //     //Tambien podria definir otra funcion y devolver un resultado unico. 
        // }

        // Simular un tiempo de espera de 2 segundos (2000 milisegundos)
        setTimeout(() => {
            if (divisor === 0) {
                reject("No se puede dividir por cero.");
            } else {
                resolve(dividendo / divisor);
            }
        }, 2000); // Cambia este valor según el tiempo de espera deseado
    });
};


const dividirConPromesa_02 = (dividendo, divisor) => {
    return new Promise((resolve, reject) => { //resolve y reject son funciones callback igualmente.
        console.log(`Recibiendo promesa para dividir: ${dividendo} / ${divisor}`);

        if (divisor === 0) {
            reject("No se puede dividir por cero.");//La promesa no se puede cumplir para este caso...
        } else {
            resolve(dividendo / divisor); //OJO le estoy pasando el valor resultado de esta operación, 
            //Tambien podria definir otra funcion y devolver un resultado unico. 
        }
    });
};


// Usamos el Async y Await
const funcionAsincronica = async (a, b) => {
    // bloque codigo
    console.log('Ejecutando div por func Async()')
    try {
        // uso await para esperar el resultado de las promesas
        let resultado = await dividirConPromesa(a, b)
        console.log(resultado);

        let resultado_02 = await dividirConPromesa_02(b, a)
        console.log(resultado_02);

    } catch (error) {
        // si falla me voy por este camino
        console.log("No se pudo cumplir la promesa, error: " + error);
    }
}


funcionAsincronica(9, 2)

// No se generan bloqueos en los flujos, ya que `funcionAsincronica()` si bien se ejecuta primero que el console.log, esta trabaja de forma asincronica.
console.log("Esto se ejecuta independiente de la funcion Async");