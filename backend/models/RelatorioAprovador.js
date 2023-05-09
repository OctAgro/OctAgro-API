const { DataTypes } = require('sequelize')
const db = require('../db/conexao')
const Usuario = require('./Usuario')
const Pedido = require("./Pedido")

const RelatorioAprovador = db.define('RelatorioAprovador', {
    id_relatorio_aprovador: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    status_aprovacao:{
        type: DataTypes.STRING,
        require: true,
        defaultValue: 'Pendente'
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
        allowNull: false
    },

    status_final_aprovacao: {
        type: DataTypes.BOOLEAN,
        required: true,
        allowNull: true
    },
    id_pedido: DataTypes.INTEGER,
    id_usuario: DataTypes.INTEGER
})

//Criando relação entre tabela RelatorioAprovador e Usuario
Pedido.hasMany(RelatorioAprovador, { foreignKey: 'id_pedido' });
RelatorioAprovador.belongsTo(Usuario,{foreignKey: 'id_usuario'})
RelatorioAprovador.belongsTo(Pedido,{foreignKey: 'id_pedido'})


//Criando relação entre tabela RelatorioAprovador e Usuario
Pedido.hasMany(RelatorioAprovador, { foreignKey: 'id_pedido' });

module.exports = RelatorioAprovador