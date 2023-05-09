const router = require ('express').Router()


const FornecedorController = require('../controllers/FornecedorController')
const PedidoController = require('../controllers/PedidoController')
const ProdutoController = require('../controllers/ProdutoController')

// Rotas do Administrador para fazer CRUD de Fornecedores

router.get('/fornecedores/home',FornecedorController.listarFornecedor) // Lista Fornecedores
router.post('/fornecedores/cadastro',FornecedorController.cadastrarFornecedor) // Cadastra Fornecedores
router.post('/fornecedor/atualizar/:id',FornecedorController.atualizarFornecedor) //  Atualiza um Fornecedor
router.post('/fornecedor/deletar/:id,',FornecedorController.deletarFornecedor) //  Deleta um Fornecedor
router.get('/fornecedor/encontrar/:id',FornecedorController.procurarFornecedor) // Procurar Forcedor por ID

// Rotas do Administrador para fazer CRUD de Pedido

router.get('/pedidos/home',PedidoController.listarPedidos) // Listar Pedidos
router.get('/pedidos/listarporID/:id',PedidoController.listarPedidosById) //Listar Pedido por ID
router.post('pedidos/cadastrar',PedidoController.criarPedido) // Cadastrar Pedido
router.post('/pedidos/atualizar/:id',PedidoController.atualizarPedido) // Atualizar Pedido
router.post('/pedidos/atualizarporID/:id',PedidoController.atualizarpedidoPorId) // Atualizar por Id do Pedido

// Rotas do Arministrador para fazer CRUD do Produto

router.get('/produtos/home',ProdutoController.listarProduto) // Listar Produtos
router.post('/produtos/cadastrar',ProdutoController.cadastrarProduto) // Cadastrar Produto
router.post('/produtos/atualizar/:id',ProdutoController.atualizarProduto) // Atualizar Produto
router.post('/produtos/deletar/:id',ProdutoController.deletarProduto) // Deletar Produto


module.exports = router