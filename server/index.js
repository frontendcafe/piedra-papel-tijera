const server = require('~modules/server')
const app = require('~modules/app');

app.route(server.router);

server.startServer();

module.exports = {
    server
}