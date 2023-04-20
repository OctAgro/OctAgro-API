const Sequelize = require('sequelize')
const db = require('../db/conexao')

const CriteriosAvaliacao = db.define('criterios_avaliacao', {
    id_criterio: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    coloracao: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },

    impurezas: {
        type: Sequelize.BOOLEAN,
        allowNull: false 
    },

    ausencia_mofo: {
        type: Sequelize.BOOLEAN,
        allowNull: false 
    },

    ausencia_insetos: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }

})

module.exports = CriteriosAvaliacao