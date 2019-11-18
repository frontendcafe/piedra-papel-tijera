const services = require('./services');
const expect = require('chai').expect;
const server = require('~root/index.js').server;
const request = require('supertest');

describe('Echo', () => {
    it('Servicio echo devuelve el mismo string', () => {
        expect(services.echo('bar')).to.equal('bar');
    })

    it('GET /echo debe funcionar correctamente', () => {
        request(server.router)
            .get('/echo/palabra')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                assert(response.body.text, 'palabra')
            });
    });

    it('POST /echo debe funcionar correctamente', () => {
        request(server.router)
            .post('/echo')
            .send({text:"otra palabra"})
            .expect('Content-Type', /json/)
            .expect('Content-Length', '15')
            .expect(200)
            .then(response => {
                assert(response.body.text, 'otra palabra')
            });
    });
});