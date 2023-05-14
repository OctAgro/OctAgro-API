const Sequelize = require("sequelize")
const db = require("../db/conexao")
const Produto = require("./Produto");
const Fornecedor = require("./Fornecedor");


const Pedido = db.define ("pedido" , {
    id_pedido: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    status_pedido: {
        type: Sequelize.STRING,
        require: true,
        defaultValue: "Recebido"

    },

    status_aprovacao:{
        type: Sequelize.STRING,
        require: true,
        defaultValue: "Pendente"
    },

    nome_motorista: {
        type:Sequelize.STRING,
        require: false,
        allowNull: true,
        defaultValue: ""
    },
    
    placa_veiculo: {
        type:Sequelize.STRING,
        require: false,
        allowNull: true,
        defaultValue: ""
    },

    documentos_anexos: {
        type:Sequelize.STRING,
        require: false,
        allowNull: true
    },

    id_produto: Sequelize.INTEGER,
    id_fornecedor: Sequelize.INTEGER,

    status_pedido_situacao: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false,
        defaultValue: 1
    }

},{
    timestamps: false
})

Pedido.belongsTo(Produto, { foreignKey: "id_produto"});
Pedido.belongsTo(Fornecedor, {foreignKey: "id_fornecedor"});

module.exports = Pedido