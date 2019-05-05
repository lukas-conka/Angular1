module.exports = {

    async index(req, res){

        var contatos = [
            {nome: "Lucas", telefone: "11999-8888"},
            {nome: "Samara", telefone: "00999-8888"},
        ]

        return res.json(contatos)

    }

}