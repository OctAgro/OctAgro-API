const Sequelize = require('sequelize')
const db = require('../db/conexao')

const Fornecedor = db.define('fornecedor', {
    // DADOS IDENTIFICAÇÃO
    id_fornecedor: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    CNPJ: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    IE: {
        type: Sequelize.STRING,
        allowNull: false
    },

    razao_social: {
        type: Sequelize.STRING,
        allowNull: false
    },

    

    responsavel: {
        type: Sequelize.STRING,
        allowNull: false
    },

    // DADOS DE CONTATO

    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    },

    tel_celular: {
        type: Sequelize.STRING,
        allowNull: false
    },

    e_mail1: {
        type: Sequelize.STRING,
        allowNull: false
    },

    e_mail2: {
        type: Sequelize.STRING,
        allowNull: true
    },

    //DADOS DO ENDEREÇO

    cep: {
        type: Sequelize.STRING,
        allowNull: false
    },

    estado: {
        type: Sequelize.STRING,
        allowNull: false
    },

    cidade: {
        type: Sequelize.STRING,
        allowNull: false
    },

    bairro: {
        type: Sequelize.STRING,
        allowNull: false
    },

    endereco: {
        type: Sequelize.STRING,
        allowNull: false
    },

    numero: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    complemento: {
        type: Sequelize.STRING,
        allowNull: true
    },

    // OUTROS 

    comentario: {
        type: Sequelize.STRING,
        allowNull: true
    },

    // EQUIVALENTE A NOME FANTASIA
    nome_fornecedor: {
        type:Sequelize.STRING,
        require: true,
        allowNull: false
    },

    //removido nome_motorista, placa_veiculo, documento_anexos de Fornecedor para Pedido

    status_fornecedor: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: 1
    }
})

module.exports = Fornecedor