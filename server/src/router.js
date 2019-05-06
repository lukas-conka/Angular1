const  express = require('express');
const ContatosController = require('../controllers/ContatosController');
const routes = express.Router();



routes.get('/contatos', ContatosController.index);
routes.get('/operadoras', ContatosController.operadoras);
routes.post('/contatos', ContatosController.store);

module.exports = routes;