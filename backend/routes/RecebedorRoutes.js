const router = require("express").Router()

const RecebedorController = require('../controllers/RecebedorController')

router.get('/home', RecebedorController.listarRelatorios)
router.post('/entradamercadoria', RecebedorController.criarRelatorio)
router.post('/relatorios/apagar/:id', RecebedorController.apagarRelatorio)
router.post('/relatorios/editar/:id', RecebedorController.atualizarRelatorio)
router.get('/relatorios/procurar/:id', RecebedorController.listarRelatoriosById)
module.exports = router