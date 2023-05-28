const Usuario = require('../models/Usuario')
const Produto = require('../models/Produto')
const CriteriosAvaliacao = require('../models/CriteriosAvaliacao')
const Pedido = require('../models/Pedido')

module.exports = class CriteriosController {
    static async criarCriterio(req, res) {
        const data = req.body

        const criterio = new CriteriosAvaliacao({


            descricao_regra: data.descricao_regra,
            inserir_valor: data.inserir_valor,
            valor_max: data.valor_max,
            funcao:data.funcao,
            id_produto: data.id_produto
            
        })

        try {
            const novoCriterio = await criterio.save()
            res.json({ mensagem: 'Criterio criado com sucesso!', status: 201 }).status(201)
        } catch (erro) {
            res.status(500).json({ mensagem: erro })
        }

    }

    static async listarCriterios(req, res) {
        try {
          const criterios = await CriteriosAvaliacao.findAll()
          return res.json(criterios).status(200)
        } catch (error) {
          return res.json(error).status(500)
        }
      }

    static async listarCriteriosById(req,res) {
        const idPedido = req.params.id
        try {
            const pedidos = await Pedido.findOne({
                where: { id_pedido: idPedido },
                include: [Produto]
            });

            const idProduto = pedidos.id_produto

            const criterios = await CriteriosAvaliacao.findOne({
                where: { id_produto: idProduto },
                attributes: ['descricao_regra', 'inserir_valor', 'valor_max', 'funcao']
            })

            if (!pedidos) {
                return res.status(404).json({ mensagem: 'Pedido não encontrado' });
            }
            res.status(200).json(criterios)
        } catch (erro) {
            res.status(500).json({ mensagem: erro })
        }
    }
}