const router = require('express').Router()

const UsuarioController = require('../controllers/UsuarioController')

// router.get("/login", UsuarioController.loginUsuario)

//!!! tirei o / que estava após o listar, se der erro pode ser isso nos hooks
router.get("/listar", UsuarioController.listarUsuario)
//!!!
router.get("/listar/:id", UsuarioController.procurarUsuario)
router.post('/loginPost', UsuarioController.loginPost)

router.post('/registrarUsuarioPost', UsuarioController.registrarUsuarioPost);

router.delete("/deletar/:id", UsuarioController.deletarUsuario)
router.put("/atualizarUsuarioPost/:id", UsuarioController.atualizarUsuario)
router.get('/buscar-usuario', UsuarioController.buscarUsuarioByEmail)
router.put('/alterarStatus/:id', UsuarioController.alterarStatusUsuario)

module.exports = router