const Sequelize = require('sequelize')
const db = require('../db/conexao')

const Produto = require('./Produto')
const RelatorioRecebedor = require('./RelatorioRecebedor')
const Pedido = require('./Pedido')

const CriteriosAvaliacao = db.define('criterios_avaliacao', {
    id_criterio: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    descricao_regra: {
        type: Sequelize.STRING,
        allowNull: false

    },

    inserir_valor: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },

    valor_max: {
        type: Sequelize.INTEGER,
        allowNull: true
    },

    funcao: {
        type: Sequelize.STRING,
        allowNull: false
    },
  
    status_checkbox: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: 0
    },

    id_produto: Sequelize.INTEGER,
    id_relatorio: Sequelize.INTEGER,
    id_pedido: Sequelize.INTEGER

})

CriteriosAvaliacao.belongsTo(Produto, { foreignKey: "id_produto"});
CriteriosAvaliacao.belongsTo(RelatorioRecebedor, { foreignKey: "id_relatorio_recebedor"});
CriteriosAvaliacao.belongsTo(Pedido, { foreignKey: "id_pedido"});


module.exports = CriteriosAvaliacao