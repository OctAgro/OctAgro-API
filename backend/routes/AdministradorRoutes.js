const router = require ('express').Router()


const FornecedorController = require('../controllers/FornecedorController')
const PedidoController = require('../controllers/PedidoController')
const ProdutoController = require('../controllers/ProdutoController')
const UsuarioControllers = require('../controllers/UsuarioController')

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

module.exports = router