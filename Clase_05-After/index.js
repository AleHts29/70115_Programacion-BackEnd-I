
// Usando .then
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.statusText}`);
        }
        return response.json();
    })
    .then(users => {
        return manager.guardarUsuarios(users);
    })
    .then(() => {
        return manager.consultarUsuarios();
    })
    .then(usuarios => {
        console.log('Usuarios guardados:', usuarios);
    })
    .catch(err => {
        console.error(`Error: ${err}`);
    });


// Usando Async/Await
const fetch = require('node-fetch');
const UsersManager = require('./UsersManager');

const manager = new UsersManager();

const fetchAndSaveUsers = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.statusText}`);
        }
        const users = await response.json();
        await manager.guardarUsuarios(users);

        const usuariosGuardados = await manager.consultarUsuarios();
        console.log('Usuarios guardados:', usuariosGuardados);
    } catch (err) {
        console.error(`Error: ${err}`);
    }
};

fetchAndSaveUsers();



/*
:::Proyecto Ecomerce
Modelo de arquitectura se le llama ---> MVC: Modelo, Vista, Controlador


===>> Cliente Visual: fetch : /api/product/


===>> Server: APIs
    - /api/users/
    - /api/product/
    - /api/carritos/


*/


