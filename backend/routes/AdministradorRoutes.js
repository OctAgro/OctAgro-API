const router = require ('express').Router()


const FornecedorController = require('../controllers/FornecedorController')
const PedidoController = require('../controllers/PedidoController')
const ProdutoController = require('../controllers/ProdutoController')
const UsuarioControllers = require('../controllers/UsuarioController')
const RecebedorController = require('../controllers/RecebedorController')
const AnalistaController = require('../controllers/AnalistaController')
const AprovadorController = require('../controllers/AprovadorController')
const CriteriosController = require('../controllers/CriteriosController')

// Rotas do Administrador para fazer CRUD de Fornecedores

router.get('/fornecedores/home',FornecedorController.listarFornecedor) // Lista Fornecedores
router.post('/fornecedores/cadastro',FornecedorController.cadastrarFornecedor) // Cadastra Fornecedores
router.post('/fornecedor/atualizar/:id',FornecedorController.atualizarFornecedor) //  Atualiza um Fornecedor
router.post('/fornecedor/deletar/:id',FornecedorController.alterarStatusFornecedor) //  Deleta um Fornecedor
router.get('/fornecedor/encontrar/:id',FornecedorController.procurarFornecedor) // Procurar Forcedor por ID

// Rotas do Administrador para fazer CRUD de Pedido

router.get('/pedidos/home',PedidoController.listarPedidos) // Listar Pedidos
router.get('/pedidos/listarporID/:id',PedidoController.encontrarPedido) //Listar Pedido por ID
router.post('/pedidos/cadastrar',PedidoController.criarPedido) // Cadastrar Pedido
router.post('/pedidos/atualizar/:id',PedidoController.atualizarPedido) // Atualizar Pedido
router.post('/pedidos/deletar/:id', PedidoController.alterarStatusPedido) // Deletar um Pedido


// Rotas do Administrador para fazer CRUD do Produto

router.get('/produtos/home',ProdutoController.listarProduto) // Listar Produtos
router.post('/produtos/cadastrar',ProdutoController.cadastrarProduto) // Cadastrar Produto
router.post('/produtos/atualizar/:id',ProdutoController.atualizarProduto) // Atualizar Produto
router.post('/produtos/deletar/:id',ProdutoController.alterarStatusProduto) // Deletar Produto
router.post('/produtos/procurar/:id',ProdutoController.procurarProduto) // Achar um Produto Produto

// Rotas do Administrador para fazer CRUD de Usuario

router.post('/usuarios/cadastrar',UsuarioControllers.registrarUsuarioPost) // Cadastrar Usuario
router.post('/usuarios/buscar', UsuarioControllers.buscarUsuarioByEmail) // Buscar Usuario por email
router.get('/usuarios/listar',UsuarioControllers.listarUsuario) // Listar todos os usuarios
router.post('/usuarios/deletar/:id',UsuarioControllers.deletarUsuario) // deletar usuario
router.post('/usuarios/atualizar/:id',UsuarioControllers.atualizarUsuario) // Atualizar Usuario

// Rotas do Administrador para Relatorio RECEBEDOR 

router.get('/recebedor/home', RecebedorController.listarRelatorios)
router.post('/recebedor/entradamercadoria', RecebedorController.criarRelatorio)
router.post('/recebedor/relatorios/apagar/:id', RecebedorController.apagarRelatorio)
router.post('/recebedor/relatorios/editar', RecebedorController.atualizarRelatorio)
router.get('/recebedor/relatorios/procurar/:id', RecebedorController.listarRelatoriosById)
router.get('/recebedor/relatorios/criterios/:id', RecebedorController.listarCriterios)
router.put('/recebedor/alterarStatus/:id', RecebedorController.alterarStatusRecebedor)

// Rotas de Administrador para Relatorio Analista

router.get('/analista/home', AnalistaController.listarRelatorios)
router.post('/analista/relatorios', AnalistaController.criarRelatorioAnalista)
router.post('/analista/relatorios/atualizar', AnalistaController.updateRelatorioAnalista)
router.post('/analista/relatorios/:id', AnalistaController.encontrarRelatorioAnalista)
router.get('/analista/relatorios/criterios/:id', AnalistaController.listarCriterios)
router.put('/analista/alterarStatus/:id', AnalistaController.alterarStatusAnalista)
router.post('/analista/relatorios/apagar/:id', AnalistaController.apagarRelatorio)

// Rotas de Administrador para Relaotiro Aprovador

router.get('/aprovador/home', AprovadorController.listarRelatorios)
router.post('/aprovador/relatorios', AprovadorController.criarRelatorioAprovacao)
router.post('/aprovador/relatorios/editar', AprovadorController.atualizarRelatorioAprovacao)
router.post('/aprovador/relatorios/:id', AprovadorController.encontrarRelatorioPorId)
router.get('/aprovador/relatorios/criterios/:id', AprovadorController.listarCriterios)
router.put('/aprovador/alterarStatus/:id', AprovadorController.alterarStatusAprovador)
router.post('/aprovador/relatorios/apagar/:id', AprovadorController.apagarRelatorio)

// Rotas de Criterios

router.post('/criterio/criar',CriteriosController.criarCriterio) // Criar um criterio
router.get('/criterio/listar',CriteriosController.listarCriterios) // Listar Criterios
router.get('/criterio/listarById/:id',CriteriosController.listarCriteriosById) // Listar Criterios pela ID



module.exports = router