const { DataTypes } = require('sequelize')
const db = require('../db/conexao')
const Usuario = require('./Usuario')

const RelatorioAprovador = db.define('RelatorioAprovador', {
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
        allowNull: false
    },

    status_final_aprovacao: {
        type: DataTypes.BOOLEAN,
        required: true,
        allowNull: true
    }
})

//Criando relação entre tabela RelatorioAprovador e Usuario
RelatorioAprovador.belongsTo(Usuario, { foreignKey: 'id_usuario' })
//Usuario.hasMany(RelatorioAprovador) // vinculo com a tabela usuarios tambem (Gabriel)

async function verificarUsuario(){

    const relatorioAprovadorUsuario = await Usuario.findByPk(1)
    return relatorioAprovadorUsuario
}

verificarUsuario().then(function(relatorioAprovadorUsuario) {

    RelatorioAprovador.create({
        doc_status: true,
        info_recebedor_status: false,
        info_analista_status: true,
        revisao_aprovador: 'Gostei!',
        status_final_aprovacao: true,
        id_usuario: relatorioAprovadorUsuario.id_usuario
    })

}).catch(function(erro) {
    console.log('Erro', erro)
})

module.exports = RelatorioAprovador