const express = require('express')
const conexao = require('./db/conn')
const usuarioPadrao = require('./models/Usuario')
const UsuarioRotas = require('./routes/UsuarioRotas')

const app = express()

app.use(express.json())

app.use('/usuarios', UsuarioRotas)

//Conexao com Banco de Dados
conexao.sync().then(() => {
    app.listen(3000)
}).catch(erro => {
    console.log('Deu erro: ', erro)
})
