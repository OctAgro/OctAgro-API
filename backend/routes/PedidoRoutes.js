const router = require("express").Router()

const PedidoController = require('../controllers/PedidoController')

router.get('/home')
router.post('/entrada-pedido', PedidoController.criarPedido)
router.get('/buscar-pedido', PedidoController.listarPedidos)
router.get('/buscar-pedido/:id', PedidoController.listarPedidosById)
router.put('/alterarStatus/:id', PedidoController.alterarStatusPedido)

module.exports = router