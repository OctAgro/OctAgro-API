const router = require('express').Router()

const UsuarioController = require('../controllers/UsuarioController')

// router.get("/login", UsuarioController.loginUsuario)
router.get("/listar/", UsuarioController.listarUsuario)
router.get("/listar/:id_usuario", UsuarioController.procurarUsuario)
router.post('/loginPost', UsuarioController.loginPost)
router.post('/registrarUsuarioPost', UsuarioController.registrarUsuarioPost)
router.delete("/:id_usuario", UsuarioController.deletarUsuario)
router.put("/atualizarUsuarioPost/:id_usuario", UsuarioController.atualizarUsuario)
router.get('/buscar-usuario', UsuarioController.buscarUsuarioByEmail)
router.put('/alterarStatus/:id_usuario', UsuarioController.alterarStatusUsuario)

module.exports = router