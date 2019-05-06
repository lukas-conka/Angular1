const mongoose = require('mongoose')

const Contato  = mongoose.model('Contato')

module.exports = {

    async index(req, res){

        const contatos = await Contato.find({});

        return res.json(contatos);

    },

    async store(req, res){

        const contato = await Contato.create(req.body)

        return res.json(contato);
    },

     async operadoras(req, res){

        var operadoras = [
            {nome: "Oi", codigo: 14, categoria: "Celular", preco: 2},
            {nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1},
            {nome: "GVT", codigo: 23, categoria: "Fixo", preco: 4},
            {nome: "Claro", codigo: 44, categoria: "Celular", preco: 5},
        ];

        return res.json(operadoras)

    }

}