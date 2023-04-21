const router = require("express").Router()

const PedidoController = require('../controllers/PedidoController')

router.get('/home')
router.post('/entrada-pedido', PedidoController.criarPedido)
router.get('/buscar-pedido', PedidoController.listarPedidos)
/* router.post('/pedido/:id', PedidoController.encontrarPedido) */


module.exports = router