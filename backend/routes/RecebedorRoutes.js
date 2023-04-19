const router = require("express").Router()

const RecebedorController = require('../controllers/RecebedorController')

router.get('/home')
router.post('/entrada-mercadoria', RecebedorController.criarRelatorio)