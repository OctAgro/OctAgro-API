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
        defaultValue: 'Recebido',
        require: true
    },

    status_aprovacao:{
        type: Sequelize.STRING,
        defaultValue: 'Pendente',
        require: true
    },

    id_produto: Sequelize.INTEGER,
    id_fornecedor: Sequelize.INTEGER

},{
    timestamps: false
})

Pedido.belongsTo(Produto, { foreignKey: "id_produto"});
Pedido.belongsTo(Fornecedor, {foreignKey: "id_fornecedor"});

async function contar(){
    const pedidos = await Pedido.count(Pedido.id_pedido)
    return pedidos
}

contar().then(function(valor){
    console.log('Quantidade',valor);
    if (valor===0) {

        Pedido.create({
            id_produto: 1,
            id_fornecedor: 1,
          });
          Pedido.create({
            id_produto: 2,
            id_fornecedor: 2,
          });
          Pedido.create({
            id_produto: 3,
            id_fornecedor: 3,
          });
          Pedido.create({
            id_produto: 4,
            id_fornecedor: 4,
          });
    }

}).catch(function(erro){
    console.log('Erro',erro)
})


module.exports = Pedido