const Sequelize = require("sequelize")
const db = require("../db/conexao")
const Usuario = require("./Usuario")
const Produto = require("./Produto")

const RelatorioRecebedor = db.define("RelatorioRecebedor", {
    id_relatorio_recebedor: {
        type: Sequelize.INTEGER,
        autoIncrement:  true,
        autoNull: false,
        primaryKey: true
    },

    nome_fornecedor: {
        type: Sequelize.STRING,
        allowNull: false
    },

    nome_entregador: {
        type: Sequelize.STRING,
        allowNull: false
    },

    placa_veiculo: {
        type: Sequelize.STRING,
        allowNull: false
    },

    data_entrada: {
        type: Sequelize.DATE,
        allowNull: false
    },

    horario_entrada: {
        type: Sequelize.TIME,
        allowNull: false,
    },

    documento_entrada: {
        type: Sequelize.STRING,
        allowNull: true,
    },

    produtof: {
        type: Sequelize.STRING,
        allowNull: false
    },

    quantidade: {
        type: Sequelize.FLOAT,
        allowNull: false
    },

    unidade_medida: {
        type: Sequelize.STRING,
        allowNull: false
    },

    coloracao: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },

    odor: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },

    ausencia_animais: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },

    ausencia_mofo: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
})

//Criando relação entre tabela RelatorioAprovador e Usuario
RelatorioRecebedor.belongsTo(Usuario, { foreignKey: 'id_usuario' })
//Usuario.hasMany(RelatorioRecebedor) // vinculo com a tabela usuarios tambem (Gabriel)

RelatorioRecebedor.belongsTo(Produto, { foreignKey: 'id_produto' })


module.exports = RelatorioRecebedor