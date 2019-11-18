const mocha = require('mocha');

const echo = require('~components/echo');

const suite = new mocha()

suite.addFile(echo.tests);

suite.run( failure => {
    process.exit(failure);
});