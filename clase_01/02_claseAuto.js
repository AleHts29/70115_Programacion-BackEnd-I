class Auto {
    // creamos el constructor
    constructor(color, marca) {
        this.color = color;
        this.marca = marca
    }

    // Metodos 
    frenar() {
        // esto dispara una logica
        return 'se frena el auto'
    }

    acelerar() {
        // esto dispara una logica
        return `se acelera el auto de color ${this.color}`
    }
}



// creamos una instancia de la clase Auto
const newAuto01 = new Auto('Negro', 'Peugeot')
const auto2 = new Auto("Azul", "Ford")

//la construccion del objeto
console.log(newAuto01);
console.log(auto2);

// quiero ver la  ejecucion del metodo
console.log(newAuto01.acelerar());
console.log(auto2.acelerar());