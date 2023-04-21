const Sequelize = require("sequelize")
const db = require("../db/conexao")


const Pedido = db.define ("pedido" , {
    id_pedido: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    produto: {
        type: Sequelize.STRING,
        require: true,        
    },

    quantidade: {
        type: Sequelize.INTEGER,
        require: true

    },

    unidade_medida: {
        type: Sequelize.DataTypes.STRING,
        require: true
    },

    fornecedor: {
        type: Sequelize.DataTypes.STRING,
        require: true

    }
},{
    timestamps: false
})

async function contar(){
    const pedidos = await Pedido.count(Pedido.id_pedido)
    return pedidos
}

contar().then(function(valor){
    console.log('Quantidade',valor);
    if (valor===0) {

        Pedido.create({
            produto: 'Feijao',
            quantidade: 20,
            unidade_medida: 'Kg',
            fornecedor: 'Fatec Graos'
        })

        Pedido.create({
            produto: 'Milho',
            quantidade: 40,
            unidade_medida: 'Kg',
            fornecedor: 'Fatec Graos'
        })
    }

}).catch(function(erro){
    console.log('Erro',erro)
})


module.exports = Pedido