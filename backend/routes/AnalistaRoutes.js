const router = require ('express').Router()

const AnalistaController = require('../controllers/AnalistaController')

router.get('/home', AnalistaController.listarRelatorios)
router.post('/relatorios', AnalistaController.criarRelatorioAnalista)
router.post('/relatorios/atualizar', AnalistaController.updateRelatorioAnalista)
router.post('/relatorios/:id', AnalistaController.encontrarRelatorioAnalista)
router.get('/relatorios/criterios/:id', AnalistaController.listarCriterios)
router.put('/alterarStatus/:id', AnalistaController.alterarStatusAnalista)
router.post('/relatorios/apagar/:id', AnalistaController.apagarRelatorio)


module.exports = router