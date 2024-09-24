const http = require("http");
const fs = require("fs");
const updatedChat = [];

const server = http.createServer((pedido, resposta) => {
    switch (pedido.url) {
        case '/':
            resposta.writeHead(200, { "Content-Type": "text/html" });
            resposta.end(fs.readFileSync('./index.html'));
            break;
        case '/postChat':
            pedido.on('data', (body) => {
                const decodedMessage = JSON.parse(body);
                updatedChat.push(decodedMessage);
                resposta.writeHead(200, { "Content-Type": "application/json" });
                resposta.end(JSON.stringify('okay'));
            })
            break;
        case '/getChat':
            resposta.writeHead(200, { "Content-Type": "application/json" });
            resposta.end(JSON.stringify(updatedChat));
            break;
    }
});

server.listen(3000)

//npm init -y