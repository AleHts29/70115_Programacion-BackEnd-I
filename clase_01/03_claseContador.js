class Contador {
    static cuentaGlobal = 0

    constructor(responsable) {
        this.responsable = responsable
        this.cuentaIndividual = 0
    }


    // Metodos
    obtenerResponsable() {
        return this.responsable
    }

    obtenerCuentaIndividual() {
        return this.cuentaIndividual
    }

    obtenerCuentaGlobal() {
        return Contador.cuentaGlobal
    }

    contar() {
        this.cuentaIndividual++
        Contador.cuentaGlobal++
    }
}

// Creamos las instancias de la clase
const r1 = new Contador("Juan")
const r2 = new Contador("Pablo")

r1.contar()

console.log(r1);
console.log(r1.obtenerCuentaIndividual());
console.log(r1.obtenerCuentaGlobal());

console.log(r2);
console.log(r2.obtenerCuentaIndividual());
console.log(r2.obtenerCuentaGlobal());