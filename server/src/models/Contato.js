const mongoose = require('mongoose')

const ContatoSchema = new mongoose.Schema({

    nome: {
        type: String,
        require: true,
    },
    telefone:{
        type: String,
        require: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    operadora:{
        type: Object,
        require: true
    }
})

mongoose.model('Contato', ContatoSchema);