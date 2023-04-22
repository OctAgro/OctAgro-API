const router = require("express").Router()

const RecebedorController = require('../controllers/RecebedorController')

router.get('/home', RecebedorController.listarRelatorios)
router.post('/entrada-mercadoria', RecebedorController.criarRelatorio)
router.post('/relatorios/apagar/:id', RecebedorController.apagarRelatorio)
/router.post('/relatorios/editar/:id', RecebedorController.atualizarRelatorio)

module.exports = router