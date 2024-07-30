/*
Crear un proyecto de node que genere 10000 números aleatorios en un rango de 1 a 20. Indicar por consola la finalización de esta operación con un mensaje.

Mediante el uso de Promesas, crear un objeto cuyas claves sean los números salidos y el valor asociado a cada clave será la cantidad de veces que salió dicho número. Representar por consola los resultados.

Nota: Considerar que esta operación debe realizarse de forma asíncrona.

*/
// 01_ Necesito  math.random ---> Generar nummero ala
// 02_ for  para generar 10000 iteraciones
/* usar Promesas
salida esperada::
        let obj = {
            3: 1
            1: 400,
            2: 350
        }

        obj[1] = ++ 
*/

// Metodos
const generarNumerosRandom = () => {
    return new Promise((resolve, reject) => {
        try {
            const numeros = []
            for (let i = 0; i < 10000; i++) {
                const numero = Math.floor(Math.random() * 20) + 1;
                numeros.push(numero)

            }
            // Aqui ya termine las 10000 iteraciones 
            resolve(numeros)
        } catch (error) {
            reject(error)
        }
    })
}

const contarFrecuencias = (numeros) => {
    return new Promise((resolve, reject) => {
        try {
            const frecuencias = {}
            numeros.forEach(numero => {
                if (!frecuencias[numero]) {
                    frecuencias[numero] = 1;
                }
                frecuencias[numero]++;
            });
            resolve(frecuencias)
        } catch (error) {
            reject(error)
        }
    })
}



// Creamos funcion principal --> async
const main = async () => {
    try {
        // Logica
        const numeros = await generarNumerosRandom();
        console.log("Generación de numeros aleatorios completada");

        const frecuencias = await contarFrecuencias(numeros);
        console.log("frecuencias de los numeros: ", frecuencias);

    } catch (error) {
        console.error("Ocurrio un error: ", error);
    }
}

main();

console.log("Hola me estoy ejecutando despues de las ejecucion de la func main");
