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

//session  (onde express vai salvar as sessões)
// app.use(
//     session({
//         name: "session",
//         secret: "segredo",
//         resave: false, //caiu a sessão, vai desconectar
//         saveUninitialized: false,
//         store: new FileStore({
//             logFn: function() {},
//             path:require('path').join(require('os').tmpdir(), 'sessions'),
//         }),
//     cookie: {
//         secure: false,
//         maxAge: 360000, //equivale a 1 dia
//         expires: new Date(Date.now() + 360000), //automaticamente vai expirar em 1 dia
//         httpOnly: true
//     }
//     }),
// )

//mensagens com flash
app.use(flash())

//path publica
// app.use(express.static('public'))

//iniciar sessão
// app.use((req, res, next) => {
//     //conferir se o usuário possui sessão
//     if (req.session.usuarioId) {
//         res.locals.session = req.session
//     }

//     next()
// })

//Conexao com Banco de Dados
conexao.sync().then(() => {
    app.listen(3000)
}).catch(erro => {
    console.log('Deu erro: ', erro)
})