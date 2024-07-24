//ES8
//Uso de Object.entries, Object.values, Object.keys 
//para un mejor control interno sobre las propiedades de un objeto.

const impuestos = {
    impuesto1: 2341,
    impuesto2: 341,
    impuesto3: 4611,
    impuesto4: 111
};

let parLlaveValor = Object.entries(impuestos)
console.log(parLlaveValor);

// Quiero obtener solo las propiedades del objeto
let soloPropiedades = Object.keys(impuestos)
console.log(soloPropiedades);

// quiero obtener solo los valores del obj
let soloValores = Object.values(impuestos)
console.log(soloValores);


// Quiero retornar la suma de los impuestos totales
// --> 2341 + 341 + ... 
let impuestoTotal = soloValores.reduce((valorAcumulado, valorActual) => {
    console.log(`valores: valorInicial: ${valorActual} y valorAcumulado: ${valorAcumulado}`);

    return valorAcumulado + valorActual
})

console.log(impuestoTotal);