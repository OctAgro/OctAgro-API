const Sequelize = require('sequelize')
const db = require('../db/conexao')

const Fornecedores = db.define('fornecedores', {
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

/* //INPUT DOS FORNECEDOR
Fornecedores.create({
    nome_fornecedor: 'Trigostoso',
    nome_motorista: 'Adenilson Pereira',
    placa_veiculo: 'ABC1A23',
    documentos_anexos: 'DocumentoA.pdf'
})

Fornecedores.create({
    nome_fornecedor: 'Fornecedor Agrícola S/A',
    nome_motorista: 'João da Silva',
    placa_veiculo: 'DEF5678',
    documentos_anexos: 'DocumentoB.pdf'
})

Fornecedores.create({
    nome_fornecedor: 'Fornecedor Grãos Export',
    nome_motorista: 'Dirlei Vasconcelos de Almeida',
    placa_veiculo: 'GHI9101',
    documentos_anexos: 'DocumentoC.pdf'
})

Fornecedores.create({
    nome_fornecedor: 'Fornecedor Cereal Farmers',
    nome_motorista: 'Maria Aparecida Ramos',
    placa_veiculo: 'JKL2345',
    documentos_anexos: 'DocumentoD.pdf'
}) */

module.exports = Fornecedores