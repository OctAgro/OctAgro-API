const express = require('express')
const conexao = require('./db/conexao')

const RelatorioAprovadores = require('./models/RelatorioAprovador')

const app = express()

app.use(express.json())

//Rotas - invocando depois usando a rota
const AprovadorRotas = require('./routes/AprovadorRoutes')

app.use('/aprovador', AprovadorRotas)

//Conexao com Banco de Dados
conexao.sync().then(() => {
    app.listen(3000)
}).catch(erro => {
    console.log('Deu erro: ', erro)
})
