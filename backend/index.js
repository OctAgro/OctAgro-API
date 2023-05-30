const express = require('express')
const conexao = require('./db/conexao')
const flash = require('express-flash')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const router = require ('express').Router()
const chartData = require('./helpers/chartData')
const { Chart, registerables } = require("chart.js");
Chart.register(...registerables);
const { createCanvas, registerFont } = require("canvas");

//Chamando Inputs do Banco de Dados
const Fornecedores = require('./models/Fornecedor')
const RelatorioAprovadores = require('./models/RelatorioAprovador')
const Produto = require('./models/Produto')
const CriteriosAvaliacao = require('./models/CriteriosAvaliacao')
const Usuario = require('./models/Usuario')
const Pedido = require('./models/Pedido')

//Rotas - invocando depois usando a rota
const AnalistaRotas = require ('./routes/AnalistaRoutes')
const AprovadorRotas = require('./routes/AprovadorRoutes')
const UsuarioRotas = require('./routes/UsuarioRoutes')
const RecebedorRotas = require('./routes/RecebedorRoutes')
const PedidoRotas = require('./routes/PedidoRoutes')
const ProdutoRotas = require('./routes/ProdutoRoutes')
const FornecedorRotas = require('./routes/FornecedorRoutes')
const AdministradorRotas = require('./routes/AdministradorRoutes')

//Body Parse
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//CORS
app.use(cors({ credentials: false, origin: 'http://localhost:5000' }))

//Usando Rotas
app.use('/analista', AnalistaRotas)
app.use('/aprovador', AprovadorRotas)
app.use('/usuario', UsuarioRotas)
app.use('/recebedor', RecebedorRotas)
app.use('/pedido', PedidoRotas)
app.use('/produto', ProdutoRotas)
app.use('/fornecedor', FornecedorRotas)
app.use('/administrador',AdministradorRotas)

app.get('/administrador/grafico/produto', async (req, res) => {
    try {
      const dadosGrafico = await chartData.graficoProduto(req,res);
      res.json(dadosGrafico);
    } catch (error) {
      console.error('Erro ao gerar o gráfico', error);
      res.status(500).json({ error: 'Erro ao gerar o gráfico' });
    }
  });

//Mensagens com flash
app.use(flash())

//Conexao com Banco de Dados
conexao.sync().then(() => {
    app.listen(3000)
}).catch(erro => {
    console.log('Deu erro: ', erro)
})