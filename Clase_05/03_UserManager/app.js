// Importamos UserManager
const UserManager = require('./UserManager.js')

// Instancia de la clase UserManager
const manager = new UserManager();


// Crear un nuevo usuario
const nuevoUsuario = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 30,
    curso: "Node.js"
};



async function main() {
    // ejecuto el metodo del clase UserManager.createUser()
    await manager.crearUsuario(nuevoUsuario)

    // Consulta info que esta en el file .json, pero por medio de la clase UserManager
    const result = await manager.consultarUsuarios()
    console.log(result);
}

main()



