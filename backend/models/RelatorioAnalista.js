const { DataTypes } = require('sequelize')
const db = require('../db/conexao')
const Usuario = require('./Usuario')
const Pedido = require('./Pedido')

const RelatorioAnalista = db.define('RelatorioAnalista', {

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

Pedido.hasMany(RelatorioAnalista, { foreignKey: 'id_pedido' });
RelatorioAnalista.belongsTo(Usuario,{foreignKey: 'id_usuario'})
RelatorioAnalista.belongsTo(Pedido,{foreignKey: 'id_pedido'})

module.exports = RelatorioAnalista