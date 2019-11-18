const echo = require('~components/echo');

module.exports = {
    route: server => {
      server.use(echo.api, echo.routes);
    }
}