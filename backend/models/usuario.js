const Sequelize = require('sequelize')
const db = require('../db/conexao')

const Usuario = db.define('usuario', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type:Sequelize.STRING,
        require: true
    },
    senha: {
        type:Sequelize.STRING,
        require: true
    },
    
    email: {
        type:Sequelize.STRING,
        require: true
    },

    funcao: Sequelize.STRING,

    dataAdmissao: Sequelize.DATE,

    CPF: Sequelize.INTEGER,

    RG: Sequelize.INTEGER,

    dataNascimento: Sequelize.DATE,

    genero: Sequelize.STRING(1)

    
}, {
    timestamp: false
})

//comentar pois ele força a criar
// Usuario.sync({force: true})



module.exports = Usuario