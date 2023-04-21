const Sequelize = require("sequelize")
const db = require("../db/conexao")
const Usuario = require("./Usuario")
const Fornecedor = require("./Fornecedor")
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

RelatorioRecebedor.belongsTo(Fornecedor, { foreignKey: 'id_fornecedor' })

RelatorioRecebedor.belongsTo(Produto, { foreignKey: 'id_produto' })

// console.log(verificarFornecedor())
async function verificarUsuario(){

    const relatorioRecebedorUsuario = await Usuario.findByPk(5)
    return relatorioRecebedorUsuario

}

async function verificarFornecedor(){

    const relatorioRecebedorFornecedor = await Fornecedor.findByPk(1)
    return relatorioRecebedorFornecedor
}

// console.log(verificarFornecedor())
async function verificarProduto(){

    const relatorioRecebedorProduto = await Produto.findByPk(1)
    return relatorioRecebedorProduto

}
verificarUsuario().then(function(relatorioRecebedorUsuario) {
    verificarFornecedor().then(function(relatorioRecebedorFornecedor) {
        verificarProduto().then(function(relatorioRecebedorProduto) {

            // console.log('boa')

            RelatorioRecebedor.create({
                nome_fornecedor: relatorioRecebedorFornecedor.nome_fornecedor,
                nome_entregador: relatorioRecebedorFornecedor.nome_motorista,
                placa_veiculo: relatorioRecebedorFornecedor.placa_veiculo,
                data_entrada: '2022-10-02',
                horario_entrada: '08:00:00',
                documento_entrada: relatorioRecebedorFornecedor.documentos_anexos,
                produtof: relatorioRecebedorProduto.nome_produto,
                quantidade: relatorioRecebedorProduto.quantidade_produto,
                unidade_medida: 'Kg',
                coloracao: true,
                odor: true,
                ausencia_animais: true,
                ausencia_mofo: true,
                id_usuario: relatorioRecebedorUsuario.id_usuario
            })

        }).catch(function(erro) {
            console.log('Erro', erro)
        })

    }).catch(function(erro) {
        console.log('Erro', erro)
    })

}).catch(function(erro) {
    console.log('Erro', erro)
})

module.exports = RelatorioRecebedor