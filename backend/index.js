const express = require('express')
const conexao = require('./db/conexao')
const flash = require('express-flash')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const bodyParser = require('body-parser')
const app = express()
const RelatorioAprovadores = require('./models/RelatorioAprovador')

//Body Parse
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//mensagens com flash
app.use(flash())

//Rotas - invocando depois usando a rota
const AprovadorRotas = require('./routes/AprovadorRoutes')
const usuario = require('./routes/usuarioRoutes')

app.use('/aprovador', AprovadorRotas)
app.use('/usuario', usuario)

//Conexao com Banco de Dados
conexao.sync().then(() => {
    app.listen(3000)
}).catch(erro => {
    console.log('Deu erro: ', erro)
})