const express = require('express'),
      router = express.Router()

const usuarioController = require('../controllers/usuarioControllers')

// router.get("/loginUsuario", usuarioController.loginUsuario);
// router.get("/registrarUsuario", usuarioController.registrarUsuario)
router.post("/registrarUsuarioPost", usuarioController.registrarUsuarioPost)
// router.get("/:id", usuarioController.buscarUsuario)
// router.delete("/:id", usuarioController.deletarUsuario)
// router.put("/atualizar", usuarioController.atualizarUsuario)

module.exports = router