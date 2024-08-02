// Clasee UserManager
const fs = require('fs').promises;
const path = require('path');


class UsersManager {
    constructor() {
        this.filePath = path.join(__dirname, "Usuarios.json")
    }


    //Metodos Crear Usuario
    async crearUsuario(usuario) {
        try {

            // Leer el archivo si existe, de lo contrario inicializar un arreglo vacío
            let usuarios = []
            try {
                const data = await fs.readFile(this.filePath)
                usuarios = JSON.parse(data)
            } catch (error) {
                console.log("No leer el archivo");
            }

            // Agregar el nuevo usuario al arreglo
            usuarios.push(usuario)


            // Escribir el arreglo actualizado en el archivo
            await fs.writeFile(this.filePath, JSON.stringify(usuarios, null, 2), 'utf-8')

            console.log("Usuario creado y guardado");
        } catch (error) {
            console.log("error al crar usuario", error);
        }
    }

    //Metodos Leer Usuario
    async consultarUsuarios() {
        try {
            const data = await fs.readFile(this.filePath, 'utf-8')
            const usuarios = JSON.parse(data)
            return usuarios
        } catch (error) {
            console.error(`Error al consultar usuarios: ${error}`);
        }
    }
}

module.exports = UsersManager; // 👈 No olvidar exportar

