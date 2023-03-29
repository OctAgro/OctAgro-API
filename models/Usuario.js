const { DataTypes } = require('sequelize')
const db = require('../db/conn')    

const usuarioPadrao = db.define('Usuario_Padrao',{
    uso_cod: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        unique: true,
        primaryKey: true
    },
    uso_cpf:{
        type: DataTypes.CHAR(11),
        allowNull: false,
        unique: true
    },
    uso_nome: {
        type: DataTypes.CHAR(50),
        allowNull: false
    },
    uso_funcao:{
        type: DataTypes.CHAR(20),
        allowNull: false
    },
    uso_senha:{
        type: DataTypes.CHAR(50),
        allowNull: false
    }
})

module.exports = usuarioPadrao