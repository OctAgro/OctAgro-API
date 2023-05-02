const router = require('express').Router()

const ProdutoController = require('../controllers/ProdutoController')

router.post('/cadastrarProduto', ProdutoController.cadastrarProduto)

module.exports = router