const router = require('express').Router()

const AprovadorController = require('../controllers/AprovadorController')

//Todas as rotas do usuario aprovador
router.post('/home', AprovadorController.aprovadorHomePage)
router.post('/relatorios', AprovadorController.aprovadorFinalMercadoria)
router.post('/relatorios/:id', AprovadorController.encontrarRelatorioPorId)

module.exports = router