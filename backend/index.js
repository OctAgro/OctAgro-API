const express = require('express')
const conexao = require('./db/conexao')
const flash = require('express-flash')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const bodyParser = require('body-parser')
const app = express()
const RelatorioAprovadores = require('./models/RelatorioAprovador')

//Rotas - invocando depois usando a rota
const AprovadorRotas = require('./routes/AprovadorRoutes')
const UsuarioRotas = require('./routes/UsuarioRoutes')

//Body Parse
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//Usando Rotas
app.use('/aprovador', AprovadorRotas)
app.use('/usuario', UsuarioRotas)

//mensagens com flash
app.use(flash())

//Conexao com Banco de Dados
conexao.sync().then(() => {
    app.listen(3000)
}).catch(erro => {
    console.log('Deu erro: ', erro)
})