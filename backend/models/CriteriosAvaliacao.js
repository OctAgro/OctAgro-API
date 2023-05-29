const Sequelize = require('sequelize')
const db = require('../db/conexao')

const Produto = require('./Produto')

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

    id_produto: Sequelize.INTEGER

})

CriteriosAvaliacao.belongsTo(Produto, { foreignKey: "id_produto"});


module.exports = CriteriosAvaliacao