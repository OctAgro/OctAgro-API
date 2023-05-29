const router = require('express').Router()

const CriteriosController = require('../controllers/CriteriosController')

router.post('/criterio/criar',CriteriosController.criarCriterio) // Criar um criterio

module.exports = router