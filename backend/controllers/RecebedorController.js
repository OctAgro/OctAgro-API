const RelatorioRecebedor = require("../models/RelatorioRecebedor")
const Pedido = require('../models/Pedido')
const Usuario = require('../models/Usuario')
const Produto = require('../models/Produto')
const Fornecedor = require('../models/Fornecedor')

module.exports = class RelatorioController {
    static async criarRelatorio(req, res){
        const data = req.body

        console.log(data)

        if (data.checkboxColoracaoAprovado && data.checkboxColoracaoReprovado) {
            return res.json({message: 'Escolha apenas uma das opções!', status: 500}).status(500)
        } else if (!data.checkboxColoracaoAprovado && !data.checkboxColoracaoReprovado){
            return res.json({message: 'Escolha apenas uma das opções!', status: 500}).status(500)
        }

        if (data.checkboxOdorAprovado && data.checkboxOdorReprovado) {
            return res.json({message: 'Escolha apenas uma das opções!', status: 500}).status(500)
        } else if (!data.checkboxOdorAprovado && !data.checkboxOdorReprovado){
            return res.json({message: 'Escolha apenas uma das opções!', status: 500}).status(500)
        }

        if (data.checkboxAusenciaAnimaisAprovado && data.checkboxAusenciaAnimaisReprovado) {
            return res.json({message: 'Escolha apenas uma das opções!', status: 500}).status(500)
        } else if (!data.checkboxAusenciaAnimaisAprovado && !data.checkboxAusenciaAnimaisReprovado){
            return res.json({message: 'Escolha apenas uma das opções!', status: 500}).status(500)
        }

        if (data.checkboxAusenciaMofoAprovado && data.checkboxAusenciaMofoReprovado) {
            return res.json({message: 'Escolha apenas uma das opções!', status: 500}).status(500)
        } else if (!data.checkboxAusenciaMofoAprovado && !data.checkboxAusenciaMofoReprovado){
            return res.json({message: 'Escolha apenas uma das opções!', status: 500}).status(500)
        }


        const relatorioRecebedor = new RelatorioRecebedor({
            coloracao: data.checkboxColoracaoAprovado,
            odor: data.checkboxOdorAprovado,
            ausencia_animais: data.checkboxAusenciaAnimaisAprovado,
            ausencia_mofo: data.checkboxAusenciaMofoAprovado,
            id_pedido: data.idPedido,
            id_usuario: data.idUsuario
        })


        try {
            const novoRelatorioRecebedor = await relatorioRecebedor.save()
            res.status(201).json({mensagem: 'Relatório aprovado com sucesso!'})
        } catch(erro) {
            console.log(erro)
            res.status(500).json(erro)
        }
    }

    static async atualizarRelatorio(req, res){
        const idRelatorio = req.params.idRelatorio

        const data = req.body


        if(!data.textoNomeFornecedor){
            return res.json({message: 'O parametro Nome do Fornecedor não pode estar vazio!', status: 500}).status(500)
        }

        if(!data.textoNomeEntregador){
            return res.json({message: 'O parametro Nome do Entregador não pode estar vazio!', status: 500}).status(500)
        }

        if(!data.textoPlacaVeiculo){
            return res.json({message: 'O parametro Placa do Veículo não pode estar vazio!', status: 500}).status(500)
        }

        if(!data.dataDataEntrada){
            return res.json({message: 'O parametro Data de Entrada não pode estar vazio!', status: 500}).status(500)
        }

        if(!data.tempoHorarioEntrada){
            return res.json({message: 'O parametro Horario de Entrada não pode estar vazio!', status: 500}).status(500)
        }

        if(!data.textoProduto){
            return res.json({message: 'O parametro Nome do Produto não pode estar vazio!', status: 500}).status(500)
        }

        if(!data.numeroQuantidade){
            return res.json({message: 'O parametro Quantidade não pode estar vazio!', status: 500}).status(500)
        }

        if(!data.textoUnidadeMedida){
            return res.json({message: 'O parametro Unidade de Medida não pode estar vazio', status: 500}).status(500)
        }

        if (data.checkboxColoracaoAprovado && data.checkboxColoracaoReprovado) {
            return res.json({message: 'Escolha apenas uma das opções!', status: 500}).status(500)
        } else if (!data.checkboxColoracaoAprovado && !data.checkboxColoracaoReprovado){
            return res.json({message: 'Escolha apenas uma das opções!', status: 500}).status(500)
        }

        if (data.checkboxOdorAprovado && data.checkboxOdorReprovado) {
            return res.json({message: 'Escolha apenas uma das opções!', status: 500}).status(500)
        } else if (!data.checkboxOdorAprovado && !data.checkboxOdorReprovado){
            return res.json({message: 'Escolha apenas uma das opções!', status: 500}).status(500)
        }

        if (data.checkboxAusenciaAnimaisAprovado && data.checkboxAusenciaAnimaisReprovado) {
            return res.json({message: 'Escolha apenas uma das opções!', status: 500}).status(500)
        } else if (!data.checkboxAusenciaAnimaisAprovado && !data.checkboxAusenciaAnimaisReprovado){
            return res.json({message: 'Escolha apenas uma das opções!', status: 500}).status(500)
        }

        if (data.checkboxAusenciaMofoAprovado && data.checkboxAusenciaMofoReprovado) {
            return res.json({message: 'Escolha apenas uma das opções!', status: 500}).status(500)
        } else if (!data.checkboxAusenciaMofoAprovado && !data.checkboxAusenciaMofoReprovado){
            return res.json({message: 'Escolha apenas uma das opções!', status: 500}).status(500)
        }

        try {
            const relatorioRecebedorAtualizado = await relatorioRecebedor.update({
                nome_fornecedor: data.textoNomeFornecedor,
                nome_entregador: data.textoNomeEntregador,
                placa_veiculo: data.textoPlacaVeiculo,
                data_entrada: data.dataDataEntrada,
                horario_entrada: data.tempoHorarioEntrada,
                documento_entrada: data.textoDocmento,
                produto: data.textoProduto,
                quantidade: data.numeroQuantidade,
                unidade_medida: data.textoUnidadeMedida,
                coloracao: data.checkboxColoracaoAprovado,
                odor: data.checkboxOdorAprovado,
                ausencia_animais: data.checkboxAusenciaAnimaisAprovado,
                ausencia_mofo: data.checkboxAusenciaMofoAprovado
            }, {
                where: {
                    id_relatorio: idRelatorio
                }
            })

            
            res.status(200).json({mensagem: 'Relatório atualizado com sucesso!'})
        } catch(erro) {
            res.status(500).json({mensagem: erro})
        }
    }

    static async listarRelatorios(req,res){
        try {
            const relatoriosRecebedor = await RelatorioRecebedor.findAll({
                include: [
                    {
                        model: Pedido,
                        as: "pedido",
                        include: [
                            {
                              model: Produto,
                              as: "produto"
                            },
                            {
                                model: Fornecedor,
                                as: "fornecedor"
                            },

                          ]
                    },
                    {
                        model: Usuario,
                        as: "usuario",
                    },
              ],});
            res.status(200).json(relatoriosRecebedor);
        } catch (erro) {
            res.status(500).json({ message: "Não há relatórios disponíveis no momento!" });
        }
    }

    static async listarRelatoriosById(req,res) {
        const id = req.params.id
        try{ 
           const pedidos = await RelatorioRecebedor.findOne({
            where: { id_relatorio_recebedor: id },
            include: [
                {
                    model: Pedido,
                    as: "pedido",
                    include: [
                        {
                          model: Produto,
                          as: "produto"
                        },
                        {
                            model: Fornecedor,
                            as: "fornecedor"
                        },

                      ]
                },
                {
                    model: Usuario,
                    as: "usuario",
                },
          ],});

           console.log(pedidos)

           if (!pedidos) {
            return res.status(404).json({ message: 'Pedido não encontrado' });
          }
           res.status(200).json(pedidos)
        } catch(erro) {
           res.status(500).json({message: erro})
        }
   }

    static async apagarRelatorio(req,res){
        const idRelatorio = req.params.id;
        try {
            const relatorioAtualizado = await RelatorioRecebedor.destroy({
                where: { id_relatorio_recebedor: idRelatorio }
            });
            if (relatorioAtualizado != undefined) {
                res.status(422).json({ message: "Relatório excluido com sucesso!" });
            } else {
                res.status(200).json({ message: "Relatório não excluido!" });
            }
        } catch (erro) {
            console.log(erro)
            res.status(500).json({ message: erro });
        }
    }
}