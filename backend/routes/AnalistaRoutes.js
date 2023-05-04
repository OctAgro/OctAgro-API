const router = require ('express').Router()

const AnalistaController = require('../controllers/AnalistaController')

router.get('/home', AnalistaController.listarRelatorios)
router.post('/relatorios', AnalistaController.criarRelatorioAnalista)
router.post('/relatorios/:id', AnalistaController.encontrarRelatorioAnalista)
router.post('/relatorios/editar', AnalistaController.atualizarRelatorioAnalista)
router.get('/relatorios/criterios/:id', AnalistaController.listarCriterios)

module.exports = router