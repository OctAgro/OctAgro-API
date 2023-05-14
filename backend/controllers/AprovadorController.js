const RelatorioAprovador = require('../models/RelatorioAprovador')
const Pedido = require('../models/Pedido')
const Usuario = require('../models/Usuario')
const Produto = require('../models/Produto')
const Fornecedor = require('../models/Fornecedor')
const RelatorioAnalista = require('../models/RelatorioAnalista')

module.exports = class AprovadorController {

    //Função de criação do Relatorio de Aprovação a partir das informacoes providas pelo usuario
    static async criarRelatorioAprovacao(req, res) {
        //trazendo as informações preenchidas pelo usuario Aprovador através do "req.body"
        const data = req.body

        //checando se as checkboxs/caixas de seleção estão corretamente preenchidas

        if (data.checkboxDocumentacaoProdutoAprovado && data.checkboxDocumentacaoProdutoReprovado) {
            return res.json({message: "Não é possível marcar as duas opções ao mesmo tempo! A informação da Documentação deve ser aprovada ou reprovada!", status: 500}).status(500)
        } else if (!data.checkboxDocumentacaoProdutoAprovado && !data.checkboxDocumentacaoProdutoAprovado){
            return res.json({message: "Não é possível desmarcar as duas opções ao mesmo tempo! A informação da Documentação deve ser aprovada ou reprovada!", status: 500}).status(500)
        }

        if (data.checkboxInfoRecebedorAprovado && data.checkboxInfoRecebedorReprovado) {
            return res.json({message: "Não é possível marcar as duas opções ao mesmo tempo! A informação do Recebedor deve ser aprovada ou reprovada!", status: 500}).status(500)
        } else if (!data.checkboxInfoRecebedorAprovado && !data.checkboxInfoRecebedorReprovado){
            return res.json({message: "Não é possível desmarcar as duas opções ao mesmo tempo! A informação do Recebedor deve ser aprovada ou reprovada!", status: 500}).status(500)
        }

        if (data.checkboxInfoAnalistaAprovado && data.checkboxInfoAnalistaReprovado) {
            return res.json({message: "Não é possível marcar as duas opções ao mesmo tempo! A informação do Analista deve ser aprovada ou reprovada!", status: 500}).status(500)
        } else if (!data.checkboxInfoAnalistaAprovado && !data.checkboxInfoAnalistaReprovado){
            return res.json({message: "Não é possível desmarcar as duas opções ao mesmo tempo! A informação do Analista deve ser aprovada ou reprovada!", status: 500}).status(500)
        }

        //Salvando dados na Tabela do Banco de Dados
        const relatorioAprovador = new RelatorioAprovador({

            doc_status: data.checkboxDocumentacaoProdutoAprovado, 
            /* checkboxDocumentacaoProdutoReprovado, */
            info_recebedor_status: data.checkboxInfoRecebedorAprovado,
            /* checkboxInfoRecebedorReprovado, */
            info_analista_status: data.checkboxInfoAnalistaAprovado,
            /* checkboxInfoAnalistaReprovado, */
            revisao_aprovador: data.textoRevisaoFinalAprovador,
            status_final_aprovacao: data.statusFinalAprovacao,
            id_pedido: data.idPedido,
            id_usuario: data.idUsuario
        })

        try {
            const novoRelatorioAprovador = await relatorioAprovador.save()
            const atualizacaoStatus = await RelatorioAprovador.update(
                { status_aprovacao: 'Concluído' },
                { where: { id_pedido: data.idPedido}, returning: true }
            );
            console.log("aqui: " + data.idPedido)
            res.status(201).json({message: 'Relatório salvo com sucesso!'})
        } catch(erro) {
            res.status(500).json({message: erro})
        }
    }

    //Função de encontrar Relatório pelo Id
    static async encontrarRelatorioPorId(req,res) {
        const idRelatorio = req.params.id

        const relatorioProcurado = await RelatorioAprovador.findByPk(idRelatorio)

        if (!relatorioProcurado) {
            res.status(422).json({message: "Relatório não encontrado!"})
        }

        res.status(200).json({message: relatorioProcurado})

    }

    // Função para atualizar um relatório de aprovação pelo ID
    static async atualizarRelatorioAprovacao(req, res) {
        
        const data = req.body

        if (data.checkboxDocumentacaoProdutoAprovado && data.checkboxDocumentacaoProdutoReprovado) {
            return res.json({message: "Não é possível marcar as duas opções ao mesmo tempo! A informação da Documentação deve ser aprovada ou reprovada!", status: 500}).status(500)
        } else if (!data.checkboxDocumentacaoProdutoAprovado && !data.checkboxDocumentacaoProdutoReprovado){
            return res.json({message: "Não é possível desmarcar as duas opções ao mesmo tempo! A informação da Documentação deve ser aprovada ou reprovada!", status: 500}).status(500)
        }

        if (data.checkboxInfoRecebedorAprovado && data.checkboxInfoRecebedorReprovado) {
            return res.json({message: "Não é possível marcar as duas opções ao mesmo tempo! A informação do Recebedor deve ser aprovada ou reprovada!", status: 500}).status(500)
        } else if (!data.checkboxInfoRecebedorAprovado && !data.checkboxInfoRecebedorReprovado){
            return res.json({message: "Não é possível desmarcar as duas opções ao mesmo tempo! A informação do Recebedor deve ser aprovada ou reprovada!", status: 500}).status(500)
        }

        if (data.checkboxInfoAnalistaAprovado && data.checkboxInfoAnalistaReprovado) {
            return res.json({message: "Não é possível marcar as duas opções ao mesmo tempo! A informação do Analista deve ser aprovada ou reprovada!", status: 500}).status(500)
        } else if (!data.checkboxInfoAnalistaAprovado && !data.checkboxInfoAnalistaReprovado){
            return res.json({message: "Não é possível desmarcar as duas opções ao mesmo tempo! A informação do Analista deve ser aprovada ou reprovada!", status: 500}).status(500)
        }

        try {
            const relatorioAtualizado = await RelatorioAprovador.update({
                doc_status: data.checkboxDocumentacaoProdutoAprovado, 
                info_recebedor_status: data.checkboxInfoRecebedorAprovado,
                info_analista_status: data.checkboxInfoAnalistaAprovado,
                revisao_aprovador: data.textoRevisaoFinalAprovador,
            }, {
                where: {
                    id_pedido: data.idPedido
                }
            })
            res.status(200).json({message: 'Relatório atualizado com sucesso!'})
        } catch(erro) {
            res.status(500).json({message: erro})
        }
    }

    // Função para listar todos os relatórios de aprovação
    static async listarRelatorios(req, res) {
        try {
            const relatorios = await RelatorioAprovador.findAll({
                where: { status_relatorio_aprovador: 1 },
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
                ],
            });
            console.log(relatorios)
            res.status(200).json(relatorios);
        } catch (erro) {
            res.status(500).json({ message: "Não há relatórios disponíveis no momento!" });
        }
    }

    // Função para atualizar um relatório de aprovação pelo ID
    static async atualizarRelatorioPorId(req, res) {
        const idRelatorio = req.params.id;
        const dadosAtualizados = req.body;
        try {
            const relatorioAtualizado = await RelatorioAprovador.update(dadosAtualizados, {
                where: { id_relatorio_aprovador: idRelatorio }
            });
            if (relatorioAtualizado[0] === 0) {
                res.status(422).json({ message: "Relatório não encontrado!" });
            } else {
                res.status(200).json({ message: "Relatório atualizado com sucesso!" });
            }
        } catch (erro) {
            res.status(500).json({ message: erro });
        }
    }
    
    static async listarCriterios(req, res) {
        const id = req.params.id
        try {
            const pedidos = await RelatorioAprovador.findOne({
                where: { id_relatorio_aprovador: id },
                attributes: ['doc_status', 'info_recebedor_status', 'info_analista_status', 'revisao_aprovador'],
            })

            if (!pedidos) {
                return res.status(404).json({ message: 'Pedido não encontrado' });
            }

            res.status(200).json(pedidos)

        } catch (erro) {
            res.status(500).json({ message: erro })
        }
    }

    static async alterarStatusAprovador(req, res) {
        const oId_relatorio_aprovador = req.params.id

        console.log(oId_relatorio_aprovador)

        const aprovador = await RelatorioAprovador.findByPk(oId_relatorio_aprovador)


            try {
                if (aprovador.status_relatorio_aprovador == true) {
                    await RelatorioAprovador.update({
                        status_relatorio_aprovador: false
                    },{
                        where: {
                            id_relatorio_aprovador: oId_relatorio_aprovador
                        }
                    })
                } else {
                    await RelatorioAprovador.update({
                        status_relatorio_aprovador: true
                    },{
                        where: {
                            id_relatorio_aprovador: oId_relatorio_aprovador
                        }
                    })
                }
                return res.json({message: "Status do relatório do aprovador alterado com sucesso!", status: 201}).status(201)
            } catch (error) {
                return res.json(error).status(500)
            }
    }

    
    static async apagarRelatorio(req, res) {
        const idRelatorio = req.params.id

        const aprovador = await RelatorioAprovador.findByPk(idRelatorio)

        try {
            if (aprovador.status_relatorio_aprovador == true) {
                await RelatorioAprovador.update(
                    {
                        status_relatorio_aprovador: false,
                    },
                    {
                        where: {
                            id_relatorio_aprovador: idRelatorio,
                        }
                    }
                )
            } else {
                await RelatorioAprovador.update(
                    {
                        status_relatorio_aprovador: true,
                    },
                    {
                        where: {
                            id_relatorio_aprovador: idRelatorio,
                        }
                    }
                )
            }
            return res
                .json({
                    message: "Status do relatorio do recebedor alterado com sucesso!",
                    status: 201,
                })
                .status(201)
        } catch (error) {
            return res.json(error).status(500)
        }
    }

}