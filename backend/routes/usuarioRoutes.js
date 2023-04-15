const express = require('express'),
      router = express.Router()

const usuarioController = require('../controllers/usuarioControllers')

// router.get("/login", usuarioController.login)
router.post("/loginPost", usuarioController.loginPost)
// router.get("/registrarUsuario", usuarioController.registrarUsuario)
router.post("/registrarUsuarioPost", usuarioController.registrarUsuarioPost)
// router.get("/:id", usuarioController.buscarUsuario)
// router.delete("/:id", usuarioController.deletarUsuario)
// router.put("/atualizarUsuarioPost", usuarioController.atualizarUsuario)

module.exports = router