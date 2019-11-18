const services = require('./services');

module.exports = {

    getEcho: (req, res) => {
        res.json({ text: services.echo(req.params.text)})
    },

    postEcho: (req, res) => {
        console.log(req.body.text)
        res.json({ text: services.echo(req.body.text)})
    }
}