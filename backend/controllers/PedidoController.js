const Pedido = require('../models/Pedido')
const Fornecedor = require('../models/Fornecedor')
const Produto = require('../models/Produto')

module.exports = class PedidoController {
    static async criarPedido(req, res) {
        const data = req.body

        const pedido = new Pedido({


            status_pedido: data.status_pedido,
            status_aprovacao: data.status_aprovacao,
            id_produto: data.idProduto,
            id_fornecedor: data.idFornecedor,
            nome_motorista: data.nome_motorista,
            placa_veiculo: data.placa_veiculo

        })

        try {
            const novoPedido = await pedido.save()
            res.json({ mensagem: 'Pedido salvo com sucesso!', status: 201 }).status(201)
        } catch (erro) {
            res.status(500).json({ mensagem: erro })
        }

    }

    static async encontrarPedido(req, res) {
        const idPedido = req.params.id
        const pedidoProcurado = await Pedido.findByPk(idPedido)

        if (!pedidoProcurado) {
            res.status(422).json({ mensagem: "Pedido não encontrado!" })
        }

        res.status(200).json({ mensagem: pedidoProcurado })
    }


    static async atualizarPedido(req, res) {
        const idPedido = req.params.id
        const data = req.body

        try {
            await Pedido.update({
                status_pedido: data.status_pedido,
                status_aprovacao: data.status_aprovacao,
                id_produto: data.id_produto,
                id_fornecedor: data.id_fornecedor
            }, {
                where: {
                    id_pedido: idPedido
                }
            })
            res.status(200).json({ message: 'Pedido atualizado com sucesso!' })
        } catch (erro) {
            res.status(500).json({ mesage: erro })
        }
    }

    static async listarPedidos(req, res) {
        try {
            const pedidos = await Pedido.findAll({
                where: { status_pedido_situacao: 1 },
                include: [
                    {
                        model: Produto,
                        as: "produto",
                    },
                    {
                        model: Fornecedor,
                        as: "fornecedor",
                    },
                ],
            });
            res.status(200).json(pedidos)
        } catch (erro) {
            res.status(500).json({ message: erro })
        }
    }

    static async listarPedidosById(req, res) {
        const id = req.params.id
        try {
            const pedidos = await Pedido.findOne({
                where: { id_pedido: id },
                include: [
                    {
                        model: Produto,
                        as: "produto",
                    },
                    {
                        model: Fornecedor,
                        as: "fornecedor",
                    },
                ],
            });

            if (!pedidos) {
                return res.status(404).json({ mensagem: 'Pedido não encontrado' });
            }
            res.status(200).json(pedidos)
        } catch (erro) {
            res.status(500).json({ mensagem: erro })
        }
    }

    static async atualizarpedidoPorId(req, res) {
        const idPedido = req.params.id;
        const dadosAtualizados = req.body;
        try {
            const pedidoAtualizado = await Pedido.update(dadosAtualizados, {
                where: { id_pedido: idPedido }
            });
            if (pedidoAtualizado[0] === 0) {
                res.status(422).json({ mensagem: "Pedido não encontrado!" });
            } else {
                res.status(200).json({ mensagem: "Pedido atualizado com sucesso!" });
            }
        } catch (erro) {
            res.status(500).json({ mensagem: erro });
        }
    }

    static async alterarStatusPedido(req, res) {
        const oId_pedido = req.params.id

        console.log(oId_pedido)

        const pedido = await Pedido.findByPk(oId_pedido)


        try {
            if (pedido.status_pedido_situacao == true) {
                await Pedido.update({
                    status_pedido_situacao: false
                }, {
                    where: {
                        id_pedido: oId_pedido
                    }
                })
            } else {
                await Pedido.update({
                    status_pedido_situacao: true
                }, {
                    where: {
                        id_pedido: oId_pedido
                    }
                })
            }
            return res.json({ message: "Status do pedido alterado com sucesso!", status: 201 }).status(201)
        } catch (error) {
            return res.json(error).status(500)
        }
    }

}