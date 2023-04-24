const Sequelize = require('sequelize')
const db = require('../db/conexao')

const Produto = db.define('produto', {
    id_produto: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    nome_produto: {
        type:Sequelize.STRING,
        require: true,
        allowNull: false
    },

    quantidade_produto: {
        type:Sequelize.FLOAT,
        require: true,
        allowNull: false
    },
    
    unidade_medida: {
        type: Sequelize.DataTypes.STRING,
        require: true
    },

    descricao:{
        type: Sequelize.DataTypes.STRING,
        require: true
    },

    data_entrada_empresa: {
        type:Sequelize.DATEONLY,
        require: true,
        allowNull: false
    },

    hora_entrada_empresa:{
        type:Sequelize.TIME,
        require: true,
        allowNull: false
    }
})

//INPUT DOS PRODUTOS
//adicionei---------------------------------------------------
async function contar(){
    const produtos = await Produto.count(Produto.id_produto)
    return produtos;
}
contar().then(function(valor) {
    console.log('Quantidade', valor);
    if (valor === 0) {

        Produto.create({
            nome_produto: 'Milho',
            quantidade_produto: 100,
            unidade_medida: 'kg',
            data_entrada_empresa: '2023-04-18',
            hora_entrada_empresa: '08:30:00',
            descricao: '100 Sacas de Milho'
        });

        Produto.create({
            nome_produto: 'Soja',
            quantidade_produto: 70,
            unidade_medida: 'kg',
            data_entrada_empresa: '2023-04-17',
            hora_entrada_empresa: '14:45:00',
            descricao: '70 Sacas de Soja'
        });

        Produto.create({
            nome_produto: 'Trigo',
            quantidade_produto: 50,
            unidade_medida: 'kg',
            data_entrada_empresa: '2023-04-16',
            hora_entrada_empresa: '11:20:00',
            descricao: '50 Sacas de Trigo'
        });

        Produto.create({
            nome_produto: 'Arroz',
            quantidade_produto: 30,
            unidade_medida: 'kg',
            data_entrada_empresa: '2023-04-15',
            hora_entrada_empresa: '09:10:00',
            descricao: '30 Sacas de Arroz'
        })

    }
}).catch(function(erro) {
    console.log('Erro', erro)
})

module.exports = Produto