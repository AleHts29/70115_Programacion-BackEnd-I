const socket = io();

let user;
const chatBox = document.getElementById('chatBox')


/*=============================================
=                SweetAlert                   =
=============================================*/
Swal.fire({
    icon: "info",
    title: "Identificate, por favor",
    input: "text",
    text: "Ingrese userName para identificarse en el Chat!!",
    color: "#716add",
    inputValidator: (value) => {
        if (!value) {
            return "Necesitas ingresar tu username para continuar!"
        } else {
            // Capturamos el user para hacer broadcast del nuevo usuario que se conecta al chat
            socket.emit('userConnected', { user: value })
        }
    },
    allowOutsideClick: false
}).then(result => {
    user = result.value;

    // Cargamos Nombre en la plantilla Hbs
    const myName = document.getElementById("myName")
    myName.innerHTML = user;
})


//Guardar mensajes por usuario y mostrarlo en nuesto log de mensajes.
chatBox.addEventListener('keyup', evt => {
    if (evt.key === "Enter") {
        if (chatBox.value.trim().length > 0) {
            socket.emit('message', { user: user, message: chatBox.value })
            chatBox.value = '';
        } else {
            Swal.fire({
                icon: "warning",
                title: "Alert",
                text: "Por favor ingrese mensaje"
            })
        }
    }
})



// Escuchamos a todos los usuarios que estan conectados
// recivimos un array de objetos ---> [{ user: "Juan", message: "Hola" }, { user: "Elias", message: "Como estas?" }]
socket.on('messageLogs', data => {
    const messageLogs = document.getElementById('messageLogs')
    let logs = ''

    // Iteracion de []data
    data.forEach(log => {
        logs += `<b>${log.user}</b> dice: ${log.message}<br/>`
    });

    messageLogs.innerHTML = logs
})


// 2da - parte
// Aqui escuchamos los nuevos usuarios que se conectan al chat
socket.on('userConnected', data => {
    let message = `Nuevo usuario  conectado ${data}`
    Swal.fire({
        position: "top-end",
        title: "Nuevo usuario entra al chat!!",
        text: message,
        toast: true,
        color: '#716add',
        showConfirmButton: false,
        timer: 1500
    });
})


/*=============================================
=                   Extras                   =
=============================================*/

const closeChatBox = document.getElementById('closeChatBox')
closeChatBox.addEventListener('click', evt => {
    alert("Gracias por usar este chat, Adios!!")

    socket.emit('closeChat', { close: 'close' })

    messageLogs.innerHTML = '';
})
