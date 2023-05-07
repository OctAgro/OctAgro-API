const router = require('express').Router()

const AprovadorController = require('../controllers/AprovadorController')
const AnalistaController = require('../controllers/AnalistaController') // funções puxadas do Analista 
const RecebedorController = require('../controllers/RecebedorController') // funções puxadas do Recebedor

//Todas as rotas do usuario aprovador
router.get('/home', AprovadorController.listarRelatorios)
router.post('/relatorios', AprovadorController.criarRelatorioAprovacao)
router.post('/relatorios/editar', AprovadorController.atualizarRelatorioAprovacao)
router.post('/relatorios/:id', AprovadorController.encontrarRelatorioPorId)
router.get('/relatorios/criterios/:id', AprovadorController.listarCriterios)

//Todas as rotas de Aprovador com Função de Gerente (agregando função de Analista ao Aprovador)

router.post('/GEAnalista/home', AnalistaController.listarRelatorios)
router.post('/GEAnalista/relatorios', AnalistaController.criarRelatorioAnalista)
router.post('/GEAnalista/relatorios/:id', AnalistaController.encontrarRelatorioAnalista)
router.post('/GEAnalista/relatorios/editar/:id', AnalistaController.atualizarRelatorioAnalista)

//Todas as rotas de Recebedor com Função de Gerente (agregando função de Recebedor ao Aprovador)

router.get('/GERecebedor/inicio', RecebedorController.listarRelatorios)
router.post('/GERecebedor/entradamercadoria', RecebedorController.criarRelatorio)
router.post('/GERecebedor/relatorios/apagar/:id', RecebedorController.apagarRelatorio)
router.post('/GERecebedor/relatorios/editar', RecebedorController.atualizarRelatorio)
router.get('/GERecebador/relatorios/procurar/:id', RecebedorController.listarRelatoriosById)
router.get('/GERecebador/relatorios/criterios/:id', RecebedorController.listarCriterios)


module.exports = router