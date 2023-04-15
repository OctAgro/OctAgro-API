const express = require('express')
const conexao = require('./db/conexao')
const flash = require('express-flash')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const bodyParser = require('body-parser');
const app = express();

//Rotas
const usuario = require("./routes/usuarioRoutes")

//Body Parse
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


app.use("/usuario", usuario)

//receber resposta do body
// app.use(
//     express.urlencoded({
//         extended: true
//     })
// )

// app.use(express.json())

//mensagens com flash
app.use(flash())

//Rotas - invocando depois usando a rota
const AprovadorRotas = require('./routes/AprovadorRoutes')

app.use('/aprovador', AprovadorRotas)

//Conexao com Banco de Dados
conexao.sync().then(() => {
    app.listen(3000)
}).catch(erro => {
    console.log('Deu erro: ', erro)
})