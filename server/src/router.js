const  express = require('express');
const ContatosController = require('../controllers/ContatosController');
const routes = express.Router();



routes.get('/contatos', ContatosController.index);

module.exports = routes;