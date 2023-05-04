const router = require('express').Router()

const FornecedorController = require('../controllers/FornecedorController')

router.get('/listar', FornecedorController.listarFornecedor)
router.get('/listar/:id_fornecedor', FornecedorController.procurarFornecedor)
router.post('/cadastrar', FornecedorController.cadastrarFornecedor)
router.delete('/:id_fornecedor', FornecedorController.deletarFornecedor)
router.put('/atualizar/:id_fornecedor', FornecedorController.atualizarFornecedor)

module.exports = router