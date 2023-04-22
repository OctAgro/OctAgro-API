const { DataTypes } = require('sequelize')
const db = require('../db/conexao')
const Usuario = require('./Usuario')

const RelatorioAnalista = db.define ('RelatorioAnalista',{

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


RelatorioAnalista.belongsTo(Usuario,{foreignKey: 'id_usuario'}) //Vinculo com a planilha de Usuario
//Usuario.hasMany(RelatorioAnalista) // Vinculo com a planilha de Usuario Tambem

async function verificarUsuario(){

    const relatorioAnalistaUsuario = await Usuario.findByPk(1)
    return relatorioAnalistaUsuario
}

verificarUsuario().then(function(relatorioAnalistaUsuario) {

    RelatorioAnalista.create({
        qualidade_grao: true,
        formato_grao: false,
        nivel_agrotoxicos: true,
        limpeza_graos: false,
        analista_comentario: 'o grão estava com formato estranho!',
        id_usuario: relatorioAnalistaUsuario.id_usuario
    })

}).catch(function(erro) {
    console.log('Erro', erro)
})

module.exports = RelatorioAnalista