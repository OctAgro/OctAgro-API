const Sequelize = require('sequelize')
const db = require('../db/conexao')

const Fornecedor = db.define('fornecedor', {
    id_fornecedor: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    nome_fornecedor: {
        type:Sequelize.STRING,
        require: true,
        allowNull: false
    },
    nome_motorista: {
        type:Sequelize.STRING,
        require: true,
        allowNull: false
    },
    
    placa_veiculo: {
        type:Sequelize.STRING,
        require: true,
        allowNull: false
    },

    documentos_anexos: {
        type:Sequelize.STRING,
        require: true,
        allowNull: false
    }
})

//INPUT DOS FORNECEDOR

//adicionei---------------------------------------------------
async function contar(){
    const fornecedores = await Fornecedor.count(Fornecedor.id_fornecedor)
    return fornecedores
}
contar().then(function(valor) {
    console.log('Quantidade', valor);
    if (valor === 0) {
        Fornecedor.create({
            nome_fornecedor: 'Trigostoso',
            nome_motorista: 'Adenilson Pereira',
            placa_veiculo: 'ABC1A23',
            documentos_anexos: 'DocumentoA.pdf'
        })

        Fornecedor.create({
            nome_fornecedor: 'Fornecedor Agrícola S/A',
            nome_motorista: 'João da Silva',
            placa_veiculo: 'DEF5678',
            documentos_anexos: 'DocumentoB.pdf'
        })

        Fornecedor.create({
            nome_fornecedor: 'Fornecedor Grãos Export',
            nome_motorista: 'Dirlei Vasconcelos de Almeida',
            placa_veiculo: 'GHI9101',
            documentos_anexos: 'DocumentoC.pdf'
        })

        Fornecedor.create({
            nome_fornecedor: 'Fornecedor Cereal Farmers',
            nome_motorista: 'Maria Aparecida Ramos',
            placa_veiculo: 'JKL2345',
            documentos_anexos: 'DocumentoD.pdf'
        })
    }
}).catch(function(erro) {
    console.log('Erro', erro)
})

module.exports = Fornecedor