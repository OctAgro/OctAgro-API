const Sequelize = require('sequelize')
const db = require('../db/conexao')

const Fornecedor = db.define('fornecedor', {
    // DADOS IDENTIFICAÇÃO
    id_fornecedor: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    CNPJ: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    IE: {
        type: Sequelize.STRING,
        allowNull: false
    },

    razao_social: {
        type: Sequelize.STRING,
        allowNull: false
    },

    

    responsavel: {
        type: Sequelize.STRING,
        allowNull: false
    },

    // DADOS DE CONTATO

    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    },

    tel_celular: {
        type: Sequelize.STRING,
        allowNull: false
    },

    e_mail1: {
        type: Sequelize.STRING,
        allowNull: false
    },

    e_mail2: {
        type: Sequelize.STRING,
        allowNull: true
    },

    //DADOS DO ENDEREÇO

    cep: {
        type: Sequelize.STRING,
        allowNull: false
    },

    estado: {
        type: Sequelize.STRING,
        allowNull: false
    },

    cidade: {
        type: Sequelize.STRING,
        allowNull: false
    },

    bairro: {
        type: Sequelize.STRING,
        allowNull: false
    },

    endereco: {
        type: Sequelize.STRING,
        allowNull: false
    },

    numero: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    complemento: {
        type: Sequelize.STRING,
        allowNull: true
    },

    // OUTROS 

    comentario: {
        type: Sequelize.STRING,
        allowNull: true
    },

    // EQUIVALENTE A NOME FANTASIA
    nome_fornecedor: {
        type:Sequelize.STRING,
        require: true,
        allowNull: false
    },


    nome_motorista: {
        type:Sequelize.STRING,
        require: false,
        allowNull: true
    },
    
    placa_veiculo: {
        type:Sequelize.STRING,
        require: false,
        allowNull: true
    },

    documentos_anexos: {
        type:Sequelize.STRING,
        require: false,
        allowNull: true
    },

    status_fornecedor : {
        type: Sequelize.STRING,
        allowNull: true
    }
})

//INPUT DOS FORNECEDOR PARA O RECEBEDOR

//adicionei---------------------------------------------------
async function contar(){
    const fornecedores = await Fornecedor.count(Fornecedor.id_fornecedor)
    return fornecedores;
}
contar().then(function(valor) {
    console.log('Quantidade', valor);
    if (valor === 0) {
        Fornecedor.create({
            CNPJ: "99.452.956/0001-99",
            IE: "123456",
            razao_social: "Trigos Vindouros",
            responsavel: "Thomas",
            telefone:"5041-3789",
            tel_celular: "99162-9611",
            e_mail1: "trigosvindouros@live.com",
            e_mail2: "trigosvindourosduros@live.com",
            cep: "12235-400",
            estado: "SP",
            cidade: "São Jose dos Campos",
            bairro: "Campo dos Alemaes",
            endereco: "Rua do Pipoco",
            numero: "999",
            complemento: "Atras da boca de fumo",
            comentario: "Teste de comentario",
            nome_fornecedor: 'Trigostoso', // nome fantasia
            nome_motorista: 'Adenilson Pereira',
            placa_veiculo: 'ABC1A23',
            documentos_anexos: 'DocumentoA.pdf',
            status_fornecedor: "Ativo"
        })

        Fornecedor.create({
            CNPJ: "88.452.956/0001-99",
            IE: "654321",
            razao_social: "Milho Verdume",
            responsavel: "Jony",
            telefone:"5041-5959",
            tel_celular: "99999-888",
            e_mail1: "milhoverdao@live.com",
            e_mail2: "milhoversao2@live.com",
            cep: "12235-400",
            estado: "SP",
            cidade: "São Jose dos Campos",
            bairro: "Campo dos Alemaes",
            endereco: "Rua do Pó",
            numero: "111",
            complemento: "Atras da boca do Beco",
            comentario: "Teste de comentario",
            nome_fornecedor: 'Fornecedor Agrícola S/A',
            nome_motorista: 'João da Silva',
            placa_veiculo: 'DEF5678',
            documentos_anexos: 'DocumentoB.pdf',
            status_fornecedor: "Ativo"
        })

        Fornecedor.create({
            CNPJ: "77.777.956/0001-77",
            IE: "888888",
            razao_social: "Graos Lindos",
            responsavel: "Kenzo",
            telefone:"5041-3789",
            tel_celular: "99162-9611",
            e_mail1: "graoslisos@live.com",
            e_mail2: "graoslindos@live.com",
            cep: "12235-400",
            estado: "SP",
            cidade: "São Jose dos Campos",
            bairro: "Campo dos Alemaes",
            endereco: "Rua do Terere",
            numero: "555",
            complemento: "Atras da Mercadinho",
            comentario: "Teste de comentario",
            nome_fornecedor: 'Fornecedor Grãos Export',
            nome_motorista: 'Dirlei Vasconcelos de Almeida',
            placa_veiculo: 'GHI9101',
            documentos_anexos: 'DocumentoC.pdf',
            status_fornecedor: "Ativo"
        })

        Fornecedor.create({
            CNPJ: "11.111.111/0001-99",
            IE: "777777",
            razao_social: "Cereal Killers",
            responsavel: "Jason",
            telefone:"5041-3789",
            tel_celular: "99162-9611",
            e_mail1: "grugerlives@live.com",
            e_mail2: "grugertheburguer@live.com",
            cep: "12235-400",
            estado: "SP",
            cidade: "São Jose dos Campos",
            bairro: "Campo dos Alemaes",
            endereco: "Rua da Noite",
            numero: "222",
            complemento: "Atras do escuro",
            comentario: "Teste de comentario",
            nome_fornecedor: 'Fornecedor Cereal Farmers',
            nome_motorista: 'Maria Aparecida Ramos',
            placa_veiculo: 'JKL2345',
            documentos_anexos: 'DocumentoD.pdf',
            status_fornecedor: "Ativo"
        })
    }
}).catch(function(erro) {
    console.log('Erro', erro)
})

module.exports = Fornecedor