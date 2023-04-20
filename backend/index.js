const express = require('express')
const conexao = require('./db/conexao')
const flash = require('express-flash')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

//Chamando Inputs do Banco de Dados
const RelatorioAprovadores = require('./models/RelatorioAprovador')
const Fornecedores = require('./models/Fornecedor')
const Produto = require('./models/Produto')
const CriteriosAvaliacao = require('./models/CriteriosAvaliacao')

//Rotas - invocando depois usando a rota
const AnalistaRotas = require ('./routes/AnalistaRoutes')
const AprovadorRotas = require('./routes/AprovadorRoutes')
const UsuarioRotas = require('./routes/UsuarioRoutes')
const RecebedorRotas = require('./routes/RecebedorRoutes')

//Body Parse
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//CORS
app.use(cors({ credentials: false, origin: 'http://localhost:5173' }))

//Usando Rotas
app.use('/analista/', AnalistaRotas)
app.use('/aprovador', AprovadorRotas)
app.use('/usuario', UsuarioRotas)
app.use('/recebedor', RecebedorRotas)

//Mensagens com flash
app.use(flash())

//Conexao com Banco de Dados
conexao.sync().then(() => {
    app.listen(3000)
}).catch(erro => {
    console.log('Deu erro: ', erro)
})