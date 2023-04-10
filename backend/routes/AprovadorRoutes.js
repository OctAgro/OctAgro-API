const router = require('express').Router()

const AprovadorController = require('../controllers/AprovadorController')

//Todas as rotas do usuario aprovador
router.get('/home', AprovadorController.getHome)
router.post('/home', AprovadorController.postHome)
router.post('/relatorio', AprovadorController.aprovadorFinalMercadoria)
//router.post('/relatorios-pendentes')
//router.post('/relatorios-pendentes/:id')

module.exports = router