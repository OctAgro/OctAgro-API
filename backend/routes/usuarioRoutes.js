const router = require('express').Router()

const UsuarioController = require('../controllers/UsuarioController')

// router.get("/login", usuarioController.login)
router.post('/loginPost', UsuarioController.loginPost)
// router.get("/registrarUsuario", usuarioController.registrarUsuario)
router.post('/registrarUsuarioPost', UsuarioController.registrarUsuarioPost)
// router.get("/:id", usuarioController.buscarUsuario)
// router.delete("/:id", usuarioController.deletarUsuario)
// router.put("/atualizarUsuarioPost", usuarioController.atualizarUsuario)

module.exports = router