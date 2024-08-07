const http = require('http')
const PORT = 8080

// creamos el server
const server = http.createServer((request, response) => {
    response.end("Mi primer hola mundo, unsando http Nativo")
})




// escucha
server.listen(PORT, () => {
    console.log(`Server run on port: ${PORT}`);
})






