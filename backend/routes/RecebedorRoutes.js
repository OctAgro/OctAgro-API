const router = require("express").Router()

const RecebedorController = require('../controllers/RecebedorController')

router.get('/home')
router.post('/entrada-mercadoria', RecebedorController.criarRelatorio)
router.post('/relatorios/:id', RecebedorController.encontrarRelator)
// router.post('/relatorios/editar/:id', RecebedorController.atualizarRelatorio)

module.exports = router