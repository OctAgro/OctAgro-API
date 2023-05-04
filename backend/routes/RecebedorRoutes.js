const router = require("express").Router()

const RecebedorController = require('../controllers/RecebedorController')

router.get('/home', RecebedorController.listarRelatorios)
router.post('/entradamercadoria', RecebedorController.criarRelatorio)
router.post('/relatorios/apagar/:id', RecebedorController.apagarRelatorio)
router.post('/relatorios/editar', RecebedorController.atualizarRelatorio)
router.get('/relatorios/procurar/:id', RecebedorController.listarRelatoriosById)
router.get('/relatorios/criterios/:id', RecebedorController.listarCriterios)
module.exports = router