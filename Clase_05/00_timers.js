// _01
const temporizador = (callback) => {
    // SetTimeout
    setTimeout(() => {
        callback() // soyOtraFunc()
    }, 5000)
}

let soyOtraFunc = () => console.log("Realizando operacion con SetTimeOut");

// temporizador(soyOtraFunc)


// _02
let contador = () => {
    let contador = 1



    console.log("Realizando op con setInterval");

    let timer = setInterval(() => {
        console.log(contador++);
        if (contador > 5) {
            // conrtamos el flujo
            console.log("Conteo terminado!! 😄");
            clearInterval(timer)
        }

    }, 2000)



}

console.log("iniciando Tarea de conteo");
contador()