const Sequelize = require('sequelize')
const db = require('../db/conexao')

const Produto = db.define('produto', {
    id_produto: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    nome_produto: {
        type:Sequelize.STRING,
        require: true,
        allowNull: false
    },

    tipo: {
        type: Sequelize.STRING,
        require: true,
        allowNull: false
    },

    quantidade_produto: {
        type:Sequelize.FLOAT,
        require: true,
        allowNull: false
    },
    
    unidade_medida: {
        type: Sequelize.DataTypes.STRING,
        require: true
    },

    descricao:{
        type: Sequelize.DataTypes.STRING,
        require: true
    },

    data_entrada_empresa: {
        type:Sequelize.DATEONLY,
        require: true,
        allowNull: false
    },

    hora_entrada_empresa:{
        type:Sequelize.TIME,
        require: true,
        allowNull: false
    },

    status_produto: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false,
        defaultValue: 1
    }
})

module.exports = Produto