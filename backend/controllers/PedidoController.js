const Pedido = require('../models/Pedido')
const Fornecedor = require('../models/Fornecedor')
const Produto = require('../models/Produto')

module.exports = class PedidoController {
    static async criarPedido(req,res) {
        const {
            produto,
            quantidade,
            unidade_medida,
            fornecedor

        } = req.body

    const Pedido = new Pedido ({

        produto: produto,
        quantidade: quantidade,
        unidade_medida: unidade_medida,
        fornecedor: fornecedor

    })

    try {
        const novoPedido = await Pedido.save()
        res.status(201).json({mensagem: 'Relatório salvo com sucesso!', novoPedido})
    } catch(erro) {
        res.status(500).json({mensagem: erro})
    }

    }

    static async encontrarPedido(req,res) {
        const idPedido = req.params.id
        const pedidoProcurado = await Pedido.findByPk(idPedido)

        if (!pedidoProcurado) {
            res.status(422).json({mensagem: "Relatório não encontrado!"})
        }

        res.status(200).json({mensagem: pedidoProcurado})
    }


    static async atualizarPedido (req,res) {
        const idPedido = req.parms.id
        const { 
            produto,
            quantidade,
            unidade_medida,
            fornecedor

        } = req.body

        try {
            const PedidoAtualizado = await Pedido.update({
                produto: produto,
                quantidade: quantidade,
                unidade_medida: unidade_medida,
                fornecedor: fornecedor
            },{
                where: { id_pedido: idPedido
                }
            })
            res.status(200).json({mensagem: 'pedido atualizado com sucesso!', PedidoAtualizado})
        } catch(erro) {
            res.status(500).json({mensagem: erro})
        }
    }

    static async listarPedidos(req,res) {
         try{ 
            const pedidos = await Pedido.findAll({
                include: [
                    {
                      model: Produto,
                      as: "produto",
                    },
                    {
                        model: Fornecedor,
                        as: "fornecedor",
                    },
                  ],});
            res.status(200).json(pedidos)
         } catch(erro) {
            res.status(500).json({mensagem: erro})
         }
    }

    static async listarPedidosById(req,res) {
        const id = req.params.id
        try{ 
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
                ],});

           if (!pedidos) {
            return res.status(404).json({ mensagem: 'Pedido não encontrado' });
          }
           res.status(200).json(pedidos)
        } catch(erro) {
           res.status(500).json({mensagem: erro})
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

}