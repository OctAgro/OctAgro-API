const Sequelize = require("sequelize")
const db = require("../db/conexao")

const bcrypt = require("bcryptjs")

const Usuario = db.define(
  "usuario",
  {
    id_usuario: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    
    data_admissao: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },

    senha: {
      type: Sequelize.STRING,
      require: true,
    },

    funcao: {
      type: Sequelize.STRING,
      require: true,
    },

    nome: {
      type: Sequelize.STRING,
      require: true,
    },

    CPF: { 
        type:Sequelize.STRING,
        require: true,
    },

    RG: {
        type:Sequelize.STRING,
        require: true
    },

    dataNascimento: {
        type:Sequelize.DATEONLY,
        require: true    
    },
    
    genero: {
        type:Sequelize.STRING(15),
        require: true
    },

    
    telefone: {
        type: Sequelize.STRING,
        require: false,
        defaultValue: ""
    },

    celular: {
        type: Sequelize.STRING,
        require: true
    },

    email: {
        type: Sequelize.STRING,
        require: true,
    },

    cep: {
        type: Sequelize.STRING,
        require: true
    },

    endereco: {
        type: Sequelize.STRING,
        require: true
    },

    numero: {
        type: Sequelize.STRING,
        require: true
    },

    complemento: {
        type: Sequelize.STRING,
        defaultValue: ""
    },

    bairro: {
        type: Sequelize.STRING,
        require: true
    },

    cidade: {
        type: Sequelize.STRING,
        require: true
    },

    estado: {
        type: Sequelize.STRING,
        require: true
    },
    
    foto: {
      type: Sequelize.STRING,
      require: false
    },

    status_usuario: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    timestamp: false,
  }
)

//adicionei---------------------------------------------------
async function contar() {
  const usuarios = await Usuario.count(Usuario.id_usuario)
  return usuarios
}
contar()
  .then(function (valor) {
    console.log("Quantidade", valor)
    if (valor === 0) {
      const salt = bcrypt.genSaltSync(10)
      const hashedSenha = bcrypt.hashSync("123", salt)

      Usuario.create({
        data_admissao: "2023-12-12",
        senha: hashedSenha,
        funcao: "Analista",
        nome: "Gabriel Briscese",
        CPF: "123",
        RG: "321",
        dataNascimento: "10-03-1998",
        genero: "M",
        telefone:"123456789",
        celular: "12345678",
        email: "gabriel@live.com",
        cep: "456789",
        endereco: "Rua Palmares",
        numero: "20",
        complemento: "complemento",
        bairro: "bairro",
        cidade: "Sao Jose dos Campos",
        estado: "SP",
        foto: "gabriel.png",
        status_usuario: true
      })

      Usuario.create({
        data_admissao: "2023-12-12",
        senha: hashedSenha,
        funcao: "Aprovador",
        nome: "Jean",
        CPF: "1234",
        RG: "4321",
        dataNascimento: "10-03-1998",
        genero: "M",
        telefone:"123456789",
        celular: "12345678",
        email: "jean@live.com",
        cep: "456789",
        endereco: "Rua Palmares",
        numero: "20",
        complemento: "complemento",
        bairro: "bairro",
        cidade: "Sao Jose dos Campos",
        estado: "SP",
        foto: "jean.png",
        status_usuario: true
      })

      Usuario.create({
        data_admissao: "2023-12-12",
        senha: hashedSenha,
        funcao: "Aprovador",
        nome: "Jonas",
        CPF: "12345",
        RG: "54321",
        dataNascimento: "10-03-1998",
        genero: "M",
        telefone:"123456789",
        celular: "12345678",
        email: "jonas@live.com",
        cep: "456789",
        endereco: "Rua Palmares",
        numero: "20",
        complemento: "complemento",
        bairro: "bairro",
        cidade: "Sao Jose dos Campos",
        estado: "SP",
        foto: "jonas.png",
        status_usuario: true

      })

      Usuario.create({
        data_admissao: "2023-12-12",
        senha: hashedSenha,
        funcao: "Administrador",
        nome: "Felipe",
        CPF: "12345",
        RG: "54321",
        dataNascimento: "10-03-1998",
        genero: "M",
        telefone:"123456789",
        celular: "12345678",
        email: "felipe@live.com",
        cep: "456789",
        endereco: "Rua Palmares",
        numero: "20",
        complemento: "complemento",
        bairro: "bairro",
        cidade: "Sao Jose dos Campos",
        estado: "SP",
        foto: "felipe.png",
        status_usuario: true

      })

      Usuario.create({
        data_admissao: "2023-12-12",
        senha: hashedSenha,
        funcao: "Recebedor",
        nome: "Thiago",
        CPF: "12345",
        RG: "54321",
        dataNascimento: "10-03-1998",
        genero: "M",
        telefone:"123456789",
        celular: "12345678",
        email: "thiago@live.com",
        cep: "456789",
        endereco: "Rua Palmares",
        numero: "20",
        complemento: "complemento",
        bairro: "bairro",
        cidade: "Sao Jose dos Campos",
        estado: "SP",
        foto: "thiago.png",
        status_usuario: true

      })



      Usuario.create({
        data_admissao: "2023-12-12",
        senha: hashedSenha,
        funcao: "Aprovador",
        nome: "Igor",
        CPF: "12345",
        RG: "54321",
        dataNascimento: "10-03-1998",
        genero: "M",
        telefone:"123456789",
        celular: "12345678",
        email: "igor@live.com",
        cep: "456789",
        endereco: "Rua Palmares",
        numero: "20",
        complemento: "complemento",
        bairro: "bairro",
        cidade: "Sao Jose dos Campos",
        estado: "SP",
        foto: "igor.png",
        status_usuario: true
        
      })

      Usuario.create({
        data_admissao: "2023-12-12",
        senha: hashedSenha,
        funcao: "Administrador",
        nome: "Gabriela",
        CPF: "12345",
        RG: "54321",
        dataNascimento: "10-03-1998",
        genero: "F",
        telefone:"123456789",
        celular: "12345678",
        email: "gabriela@live.com",
        cep: "456789",
        endereco: "Rua Palmares",
        numero: "20",
        complemento: "complemento",
        bairro: "bairro",
        cidade: "Sao Jose dos Campos",
        estado: "SP",
        foto: "gabriela.png",
        status_usuario: true

      })
    }
  })
  .catch(function (erro) {
    console.log("Erro", erro)
  })

//--------------------------------------------------

//comentar pois ele força a criar
// Usuario.sync({force: true})

module.exports = Usuario
