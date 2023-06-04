const router = require("express").Router()

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const destinationPath = path.join(__dirname, '../../frontend/src/assets');
        cb(null, destinationPath);
    },
    filename: function (req, file, cb) {
        const nomeFoto = file.originalname;
        cb(null, nomeFoto);
        console.log(nomeFoto);
    }
});
const upload = multer({ storage: storage });

const RecebedorController = require('../controllers/RecebedorController')

router.get('/home', RecebedorController.listarRelatorios)
router.post('/atualizarNF', upload.single('imagem'), RecebedorController.atualizarNF)
router.post('/entradamercadoria', RecebedorController.criarRelatorio)
router.post('/relatorios/apagar/:id', RecebedorController.apagarRelatorio)
router.post('/relatorios/editar', RecebedorController.atualizarRelatorio)
router.get('/relatorios/procurar/:id', RecebedorController.listarRelatoriosById)
router.get('/relatorios/criterios/:id', RecebedorController.listarCriterios)
router.put('/alterarStatus/:id', RecebedorController.alterarStatusRecebedor)

module.exports = router