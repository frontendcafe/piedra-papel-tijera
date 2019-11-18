const router = require('express').Router();
const controllers = require('./controllers.js');

// ECHO endpoint
router.get('/:text', controllers.getEcho)
router.post('/', controllers.postEcho);

module.exports = router;