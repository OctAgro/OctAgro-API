const Sequelize = require('sequelize')
const db = require('../db/conexao')

const bcrypt = require('bcryptjs')


const Usuario = db.define('usuario', {
    id_usuario: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type:Sequelize.STRING,
        require: true
    },
    senha: {
        type:Sequelize.STRING,
        require: true
    },
    
    email: {
        type:Sequelize.STRING,
        require: true
    },

    funcao: Sequelize.STRING,

    dataAdmissao: Sequelize.DATE,

    CPF: Sequelize.INTEGER,

    RG: Sequelize.INTEGER,

    dataNascimento: Sequelize.DATE,

    genero: Sequelize.STRING(1),

    foto: {
        type: Sequelize.STRING
    }

}, {
    timestamp: false
})

//adicionei---------------------------------------------------
async function contar(){
    const usuarios = await Usuario.count(Usuario.id_usuario)
    return usuarios;
}
contar().then(function(valor) {
    console.log('Quantidade', valor);
    if (valor === 0) {


        const salt = bcrypt.genSaltSync(10)
        const hashedSenha = bcrypt.hashSync('123', salt)
    
        Usuario.create({
            nome: 'Gabriel Briscese',
            senha: hashedSenha,
            email: 'gabriel@live.com',
            funcao: 'Analista',
            dataAdmissao: '10-01-2010',
            CPF: '123',
            RG: '321',
            dataNascimento: '10-03-1998',
            genero: 'M',
            foto: 'gabriel.png'
    
        })
    
        Usuario.create({
            nome: 'Jean',
            senha: hashedSenha,
            email: 'jean@live.com',
            funcao: 'Aprovador',
            dataAdmissao: '10-01-2010',
            CPF: '1234',
            RG: '4321',
            dataNascimento: '10-03-1998',
            genero: 'M',
            foto: 'jean.png'
    
        })
    
        Usuario.create({
            nome: 'Jonas',
            senha: hashedSenha,
            email: 'jonas@live.com',
            funcao: 'Aprovador',
            dataAdmissao: '10-01-2010',
            CPF: '12345',
            RG: '54321',
            dataNascimento: '10-03-1998',
            genero: 'M',
            foto: 'jonas.png'
    
        })
    
        Usuario.create({
            nome: 'Felipe',
            senha: hashedSenha,
            email: 'felipe@live.com',
            funcao: 'Gerente',
            dataAdmissao: '10-01-2010',
            CPF: '12345',
            RG: '54321',
            dataNascimento: '10-03-1998',
            genero: 'M',
            foto: 'felipe.png'
    
        })
    
        Usuario.create({
            nome: 'Thiago',
            senha: hashedSenha,
            email: 'tiago@live.com',
            funcao: 'Recebedor',
            dataAdmissao: '10-01-2010',
            CPF: '12345',
            RG: '54321',
            dataNascimento: '10-03-1998',
            genero: 'M',
            foto: 'thiago.png'
    
        })

        Usuario.create({
            nome: 'Leandro',
            senha: hashedSenha,
            email: 'leandro@live.com',
            funcao: 'Recebedor',
            dataAdmissao: '10-01-2010',
            CPF: '12345',
            RG: '54321',
            dataNascimento: '10-03-1998',
            genero: 'M',
            foto: 'leandro.png'
    
        })

        Usuario.create({
            nome: 'Kenzo',
            senha: hashedSenha,
            email: 'kenzo@live.com',
            funcao: 'Recebedor',
            dataAdmissao: '10-01-2010',
            CPF: '12345',
            RG: '54321',
            dataNascimento: '10-03-1998',
            genero: 'M',
            foto: 'kenzo.png'
    
        })

        Usuario.create({
            nome: 'Igor',
            senha: hashedSenha,
            email: 'igor@live.com',
            funcao: 'Aprovador',
            dataAdmissao: '10-01-2010',
            CPF: '12345',
            RG: '54321',
            dataNascimento: '10-03-1998',
            genero: 'M',
            foto: 'igor.png'
    
        })

        Usuario.create({
            nome: 'Gabriela',
            senha: hashedSenha,
            email: 'gabriela@live.com',
            funcao: 'Administrador',
            dataAdmissao: '10-01-2010',
            CPF: '12345',
            RG: '54321',
            dataNascimento: '01-01-2002',
            genero: 'F',
            foto: 'gabriela.png'
    
        })
    }
}).catch(function(erro) {
    console.log('Erro', erro)
})

//--------------------------------------------------

//comentar pois ele força a criar
// Usuario.sync({force: true})

module.exports = Usuario
