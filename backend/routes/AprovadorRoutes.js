const router = require('express').Router()

const AprovadorController = require('../controllers/AprovadorController')

//Todas as rotas do usuario aprovador
router.get('/home', AprovadorController.listarRelatorios)
router.post('/relatorios', AprovadorController.criarRelatorioAprovacao)
router.post('/relatorios/editar', AprovadorController.atualizarRelatorioAprovacao)
router.post('/relatorios/:id', AprovadorController.encontrarRelatorioPorId)
router.get('/relatorios/criterios/:id', AprovadorController.listarCriterios)

module.exports = router