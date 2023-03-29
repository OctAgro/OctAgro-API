const router = require('express').Router()
const UsuarioController = require('../controllers/UsuarioController')

router.post('/login', UsuarioController.login)

module.exports = router