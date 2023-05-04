const router = require('express').Router()

const AprovadorController = require('../controllers/AprovadorController')

//Todas as rotas do usuario aprovador
router.post('/home', AprovadorController.listarRelatorios)
router.post('/relatorios', AprovadorController.criarRelatorioAprovacao)
router.post('/relatorios/:id', AprovadorController.encontrarRelatorioPorId)
router.post('/relatorios/editar', AprovadorController.atualizarRelatorioAprovacao)
router.get('/relatorios/criterios/:id', AprovadorController.listarCriterios)

module.exports = router