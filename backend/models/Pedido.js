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
        require: true
    },

    status_aprovacao:{
        type: Sequelize.STRING,
        require: true
    },

    id_produto: Sequelize.INTEGER,
    id_fornecedor: Sequelize.INTEGER,

    status_pedido_situacao: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false
    }

},{
    timestamps: false
})

Pedido.belongsTo(Produto, { foreignKey: "id_produto"});
Pedido.belongsTo(Fornecedor, {foreignKey: "id_fornecedor"});

async function contar(){
    const pedidos = await Pedido.count(Pedido.id_pedido)
    return pedidos
}

// Abracei a função de criação de pedido em torno de um Timeout, para evitar erros de referencia temporariamente (quando for criado a função de criar fornecedores/pedidos não iremos mais utilizar este Pedido.create)

contar().then(function(valor){
    console.log('Quantidade',valor);
    if (valor===0) {

        setTimeout(function() {
            Pedido.create({
                status_pedido: 'Recebido',
                status_aprovacao: 'Pendente',
                id_produto: 1,
                id_fornecedor: 1,
            });
            Pedido.create({
                status_pedido: 'Recebido',
                status_aprovacao: 'Pendente',
                id_produto: 2,
                id_fornecedor: 2,
            });
            Pedido.create({
                status_pedido: 'Recebido',
                status_aprovacao: 'Pendente',
                id_produto: 3,
                id_fornecedor: 3,
            });
            Pedido.create({
                status_pedido: 'Recebido',
                status_aprovacao: 'Pendente',
                id_produto: 4,
                id_fornecedor: 4,
            });
        }, 2000); // espera 2 segundos antes de criar o Pedido
    }

}).catch(function(erro){
    console.log('Erro',erro)
})


module.exports = Pedido