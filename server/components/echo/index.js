const routes = require('./routes');

module.exports = {
    api: '/echo',
    routes,
    tests: `${__dirname}/tests.js`
}