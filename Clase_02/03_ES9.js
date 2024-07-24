//ES9
//Spread and Rest Operator 
//Tomemos un objeto de ejemplo:

const persona = {
    nombre: "Axel",
    edad: 29,
    materia: {
        curso01: ["ingles", "programacion"]
    },
    saludar() {
        console.log('Hola , yo soy ' + this.nombre);
    }
}


//Y usemos un array de ejemplo:
const hobbiesOriginal = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
const result = hobbiesOriginal.slice(2, 4)
console.log(result);


//Usando operador Spread-Operator:
console.log("\n************** Spread operator: ************ \n");
const copiedhobbiesOriginal = [...hobbiesOriginal]
console.log("copiedhobbiesOriginal", copiedhobbiesOriginal);

// También nos sirve para copiar objetos:
const personCopiedObj = { ...persona }
personCopiedObj.nombre = "Jesus"
console.log(personCopiedObj.saludar());


// Rest Operator
// Objects Destructuring 
// Usando el objeto persona como ejemplo:
console.log("\n************** Objects Destructuring: ************ \n");
const printNameStandar = (personParam) => {
    console.log("printNameStandard = (personParam)");
    console.log(personParam.nombre);
}
printNameStandar(persona)


// /** Usando una función con object destructing */
const printNameDestruc = ({ nombre }) => {
    console.log("printNameDestruc = ({nombre}) =>");
    console.log(nombre);
}
printNameDestruc(persona);


//Esto es posible también, pero tener cuidado en la desestructuracion
const { edad } = persona
console.log('edad: ', edad);



