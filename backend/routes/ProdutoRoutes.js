const router = require('express').Router()

const ProdutoController = require('../controllers/ProdutoController')

router.get('/listar', ProdutoController.listarProduto)
router.get('/listar/:id_produto', ProdutoController.procurarProduto)
router.post('/cadastrarProduto', ProdutoController.cadastrarProduto)
router.delete('/:id_produto', ProdutoController.deletarProduto)
router.put('/atualizar/:id_produto', ProdutoController.atualizarProduto)
router.put('/alterarStatus/:id_produto', ProdutoController.alterarStatusProduto)

module.exports = router