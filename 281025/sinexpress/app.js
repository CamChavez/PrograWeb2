//sin express

const http = require('http');
const port = 3026;
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("Hola mundo desde un servidor sin express, ¡mi primer servidor!");
});

server.listen(port, () => {
    console.log(`Server: http://127.0.0.1:${port}`);
});