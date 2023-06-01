const Sequelize = require("sequelize")
const db = require("../db/conexao")
const Usuario = require("./Usuario")
const Pedido = require("./Pedido")

const RelatorioRecebedor = db.define("RelatorioRecebedor", {
    id_relatorio_recebedor: {
        type: Sequelize.INTEGER,
        autoIncrement:  true,
        allowNull: false,
        primaryKey: true
    },

    status_aprovacao:{
        type: Sequelize.STRING,
        require: true,
        defaultValue: 'Pendente'
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
    },
    id_pedido: Sequelize.INTEGER,
    id_usuario: Sequelize.INTEGER,

    status_recebedor: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false
    }
})

//Criando relação entre tabela RelatorioAprovador e Usuario
Pedido.hasMany(RelatorioRecebedor, { foreignKey: 'id_pedido' });
RelatorioRecebedor.belongsTo(Usuario, { foreignKey: 'id_usuario' });
//Usuario.hasMany(RelatorioRecebedor) // vinculo com a tabela usuarios tambem (Gabriel)
RelatorioRecebedor.belongsTo(Pedido, { foreignKey: 'id_pedido' });


module.exports = RelatorioRecebedor