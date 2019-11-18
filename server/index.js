const express = require('express');
const server = express();
const config = require('./modules/config');

const logger = require('morgan');

const bodyParser = require('body-parser');
const app = require('./app');
const cors = require('cors');
const helmet = require('helmet');

server.use(cors())
server.use(helmet())

server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json());
server.use(logger('dev'))

app.connectDB();
app.routeApplication(server);

server.listen(config.port, () => {
    console.log(`Server listening in port ${config.port}`)
});
