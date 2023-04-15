const { DataTypes } = require('sequelize')

const db = require('../db/conexao')

const RelatorioAprovadores = db.define('RelatorioAprovadores', {
    id_relatorio_aprovador: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    doc_status: {
        type: DataTypes.BOOLEAN,
        required: true
    },

    info_recebedor_status: {
        type: DataTypes.BOOLEAN,
        required: true
    },

    info_analista_status: {
        type: DataTypes.BOOLEAN,
        required: true
    },

    revisao_aprovador: {
        type: DataTypes.STRING,
        required: false,
        allowNull: true
    },

    status_final_aprovacao: {
        type: DataTypes.BOOLEAN,
        required: true,
        allowNull: true
    }
})

module.exports = RelatorioAprovadores