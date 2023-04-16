const router = require('express').Router()

const AprovadorController = require('../controllers/AprovadorController')

//Todas as rotas do usuario aprovador
router.post('/home', AprovadorController.listarRelatorios)
router.post('/relatorios', AprovadorController.criarRelatorioAprovacao)
router.post('/relatorios/:id', AprovadorController.encontrarRelatorioPorId)
router.post('/relatorios/editar/:id', AprovadorController.atualizarRelatorioAprovacao)

module.exports = router