const { DataTypes } = require('sequelize')
const db = require('../db/conexao')
const Usuario = require('./Usuario')
const Produto = require('./Produto')

const RelatorioAnalista = db.define ('RelatorioAnalista', {

    id_relatorio_analista: {
        type: DataTypes.INTEGER,
        required: true,
        primaryKey: true,
        autoIncrement: true

    },

    qualidade_grao: {
        type: DataTypes.BOOLEAN,
        required: true,

    },

    formato_grao: {
        type: DataTypes.BOOLEAN,
        required: true
    },

    nivel_agrotoxicos: {
        type: DataTypes.BOOLEAN,
        required: true
    },

    limpeza_graos: {
        type: DataTypes.BOOLEAN,
        required: true
    },

    analista_comentario: {
        type: DataTypes.STRING,
        required: false

    }

})
RelatorioAnalista.belongsTo(Usuario,{foreignKey: 'id_usuario'})
RelatorioAnalista.belongsTo(Produto,{foreignKey: 'id_produto'})


module.exports = RelatorioAnalista