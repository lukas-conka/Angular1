module.exports = {

    async index(req, res){

        var operadoras = [
            {nome: "Oi", codigo: 14, categoria: "Celular", preco: 2},
            {nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1},
            {nome: "GVT", codigo: 23, cataegoria: "Fixo", preco: 4},
            {nome: "Claro", codigo: 44, categoria: "Celular", preco: 5},
        ];

        var contatos = [
            {nome: "Lucas", telefone: "11999-8888", data: new Date(), operadora: operadoras[0]},
            {nome: "Samara", telefone: "00999-8888", data: new Date(), operadora: operadoras[1]},
            {nome: "Faraó", telefone: "22999-8888", data: new Date(), operadora: operadoras[2]},
        ];

        return res.json(contatos)
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