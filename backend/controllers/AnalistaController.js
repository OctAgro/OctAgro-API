const RelatorioAnalista = require('../models/RelatorioAnalista')
const Pedido = require('../models/Pedido')
const Usuario = require('../models/Usuario')
const Produto = require('../models/Produto')
const Fornecedor = require('../models/Fornecedor')
const RelatorioRecebedor = require('../models/RelatorioRecebedor')
const CriteriosAvaliacao = require('../models/CriteriosAvaliacao')


module.exports = class RelatorioController {

    static async criarRelatorioAnalista(req, res) {

        const data = req.body

        console.log(data)

        if (data.checkboxQualidadeGraoAprovado && data.checkboxQualidadeGraoReprovado) {
            return res.json({ message: 'Não é possível marcar as duas opções ao mesmo tempo! A informação da Qualidade dos Grãos deve ser aprovada ou reprovada!', status: 500 }).status(500)
        } else if (!data.checkboxQualidadeGraoAprovado && !data.checkboxQualidadeGraoReprovado) {
            return res.json({ message: 'Não é possível desmarcar as duas opções ao mesmo tempo! A informação do Qualidade dos Grãos deve ser aprovada ou reprovada!', status: 500 }).status(500)
        }

        if (data.checkboxFormatoGraoAprovado && data.checkboxFormatoGraoReprovado) {
            return res.json({ message: 'Não é possível marcar as duas opções ao mesmo tempo! A informação do Formato dos Grãos deve ser aprovada ou reprovada!', status: 500 }).status(500)
        } else if (!data.checkboxFormatoGraoAprovado && !data.checkboxFormatoGraoReprovado) {
            return res.json({ message: 'Não é possível desmarcar as duas opções ao mesmo tempo! A informação do Formato dos Grãos deve ser aprovada ou reprovada!', status: 500 }).status(500)
        }

        if (data.checkboxNivelAgrotoxicosAprovado && data.checkboxNivelAgrotoxicosReprovado) {
            return res.json({ message: 'Não é possível marcar as duas opções ao mesmo tempo! A informação do Nivel de Agrotóxicos deve ser aprovada ou reprovada!', status: 500 }).status(500)
        } else if (!data.checkboxNivelAgrotoxicosAprovado && !data.checkboxNivelAgrotoxicosReprovado) {
            return res.json({ message: 'Não é possível desmarcar as duas opções ao mesmo tempo! A informação do Nivel de Agrotóxicos deve ser aprovada ou reprovada!', status: 500 }).status(500)
        }

        if (data.checkboxLimpezaGraosAprovado && data.checkboxLimpezaGraosReprovado) {
            return res.json({ message: 'Não é possível marcar as duas opções ao mesmo tempo! A informação da Limpeza dos Grãos deve ser aprovada ou reprovada!', status: 500 }).status(500)
        } else if (!data.checkboxLimpezaGraosAprovado && !data.checkboxLimpezaGraosReprovado) {
            return res.json({ message: 'Não é possível desmarcar as duas opções ao mesmo tempo! A informação da Limpeza dos Grãos deve ser aprovada ou reprovada!', status: 500 }).status(500)
        }

        if (data.checkboxDocumentacaoProdutoAprovado && data.checkboxDocumentacaoProdutoReprovado) {
            return res.json({ message: 'Não é possível marcar as duas opções ao mesmo tempo! A informação da Documentação do Produto deve ser aprovada ou reprovada!', status: 500 }).status(500)
        } else if (!data.checkboxDocumentacaoProdutoAprovado && !data.checkboxDocumentacaoProdutoReprovado) {
            return res.json({ message: 'Não é possível desmarcar as duas opções ao mesmo tempo! A informação da Documentação do Produto deve ser aprovada ou reprovada!', status: 500 }).status(500)
        }

        if (data.checkboxInfoRecebedorAprovado && data.checkboxInfoRecebedorReprovado) {
            return res.json({ message: 'Não é possível marcar as duas opções ao mesmo tempo! A informação da Informação do Recebedor deve ser aprovada ou reprovada!', status: 500 }).status(500)
        } else if (!data.checkboxInfoRecebedorAprovado && !data.checkboxInfoRecebedorReprovado) {
            return res.json({ message: 'Não é possível desmarcar as duas opções ao mesmo tempo! A informação da Informação do Recebedor deve ser aprovada ou reprovada!', status: 500 }).status(500)
        }

        const relatorioAnalista = new RelatorioAnalista({

            qualidade_grao: data.checkboxQualidadeGraoAprovado,
            formato_grao: data.checkboxFormatoGraoAprovado,
            nivel_agrotoxicos: data.checkboxNivelAgrotoxicosAprovado,
            limpeza_graos: data.checkboxLimpezaGraosAprovado,
            analista_comentario: data.comentarioAnalista,

            doc_status: data.checkboxDocumentacaoProdutoAprovado,
            info_recebedor_status: data.checkboxInfoRecebedorAprovado,

            id_pedido: data.idPedido,
            id_usuario: data.idUsuario
        })

        try {
            const novoRelatorioAnalista = await relatorioAnalista.save()
            const atualizacaoStatus = await RelatorioRecebedor.update(
                { status_aprovacao: 'Concluído' },
                { where: { id_pedido: data.idPedido }, returning: true }
            );

           for (const key in data) {
                if (key.startsWith('checkbox') && data[key] === true) {
                    const checkboxName = key.replace('checkbox', '').replace('Aprovado', '')
                    console.log(checkboxName)
                    relatorioAnalista[checkboxName] = true;

                    const criteriosAtualizados = await CriteriosAvaliacao.update(
                        { id_pedido: data.idPedido, status_checkbox: relatorioAnalista[checkboxName] },
                        { where: { descricao_regra: checkboxName } }
                    );
                }
            } 

            res.status(201).json({ message: 'Relatório salvo com sucesso!' })
            console.log(data)
        } catch (erro) {
            console.log(erro)
            res.status(500).json({ message: erro })
        }
    }


    static async encontrarRelatorioAnalista(req, res) {

        const idRelatorio = req.params.id
        const relatorioProcurado = RelatorioAnalista.findByPk(idRelatorio)

        if (!relatorioProcurado) {
            res.status(422).json({ message: "Relatório não encontrado!" })
        }

        res.status(200).json({ message: relatorioProcurado })

    }

    static async updateRelatorioAnalista(req, res) {

        const data = req.body

        if (data.checkboxQualidadeGraoAprovado && data.checkboxQualidadeGraoReprovado) {
            return res.json({ message: 'Não é possível marcar as duas opções ao mesmo tempo! A informação da Qualidade dos Grãos deve ser aprovada ou reprovada!', status: 500 }).status(500)
        } else if (!data.checkboxQualidadeGraoAprovado && !data.checkboxQualidadeGraoReprovado) {
            return res.json({ message: 'Não é possível desmarcar as duas opções ao mesmo tempo! A informação do Qualidade dos Grãos deve ser aprovada ou reprovada!', status: 500 }).status(500)
        }

        if (data.checkboxFormatoGraoAprovado && data.checkboxFormatoGraoReprovado) {
            return res.json({ message: 'Não é possível marcar as duas opções ao mesmo tempo! A informação do Formato dos Grãos deve ser aprovada ou reprovada!', status: 500 }).status(500)
        } else if (!data.checkboxFormatoGraoAprovado && !data.checkboxFormatoGraoReprovado) {
            return res.json({ message: 'Não é possível desmarcar as duas opções ao mesmo tempo! A informação do Formato dos Grãos deve ser aprovada ou reprovada!', status: 500 }).status(500)
        }

        if (data.checkboxNivelAgrotoxicosAprovado && data.checkboxNivelAgrotoxicosReprovado) {
            return res.json({ message: 'Não é possível marcar as duas opções ao mesmo tempo! A informação do Nivel de Agrotóxicos deve ser aprovada ou reprovada!', status: 500 }).status(500)
        } else if (!data.checkboxNivelAgrotoxicosAprovado && !data.checkboxNivelAgrotoxicosReprovado) {
            return res.json({ message: 'Não é possível desmarcar as duas opções ao mesmo tempo! A informação do Nivel de Agrotóxicos deve ser aprovada ou reprovada!', status: 500 }).status(500)
        }

        if (data.checkboxLimpezaGraosAprovado && data.checkboxLimpezaGraosReprovado) {
            return res.json({ message: 'Não é possível marcar as duas opções ao mesmo tempo! A informação da Limpeza dos Grãos deve ser aprovada ou reprovada!', status: 500 }).status(500)
        } else if (!data.checkboxLimpezaGraosAprovado && !data.checkboxLimpezaGraosReprovado) {
            return res.json({ message: 'Não é possível desmarcar as duas opções ao mesmo tempo! A informação da Limpeza dos Grãos deve ser aprovada ou reprovada!', status: 500 }).status(500)
        }

        if (data.checkboxDocumentacaoProdutoAprovado && data.checkboxDocumentacaoProdutoReprovado) {
            return res.json({ message: 'Não é possível marcar as duas opções ao mesmo tempo! A informação da Documentação do Produto deve ser aprovada ou reprovada!', status: 500 }).status(500)
        } else if (!data.checkboxDocumentacaoProdutoAprovado && !data.checkboxDocumentacaoProdutoReprovado) {
            return res.json({ message: 'Não é possível desmarcar as duas opções ao mesmo tempo! A informação da Documentação do Produto deve ser aprovada ou reprovada!', status: 500 }).status(500)
        }

        if (data.checkboxInfoAnalistaAprovado && data.checkboxInfoAnalistaReprovado) {
            return res.json({ message: 'Não é possível marcar as duas opções ao mesmo tempo! A informação da Informação do Recebedor deve ser aprovada ou reprovada!', status: 500 }).status(500)
        } else if (!data.checkboxInfoAnalistaAprovado && !data.checkboxInfoAnalistaReprovado) {
            return res.json({ message: 'Não é possível desmarcar as duas opções ao mesmo tempo! A informação da Informação do Recebedor deve ser aprovada ou reprovada!', status: 500 }).status(500)
        }

        try {

            const relatorioAtualizado = await RelatorioAnalista.update({

                qualidade_grao: data.checkboxQualidadeGraoAprovado,
                formato_grao: data.checkboxFormatoGraoAprovado,
                nivel_agrotoxicos: data.checkboxNivelAgrotoxicosAprovado,
                limpeza_graos: data.checkboxLimpezaGraosAprovado,
                doc_status: data.checkboxDocumentacaoProdutoAprovado,
                info_recebedor_status: data.checkboxInfoAnalistaAprovado,
                analista_comentario: data.comentarioAnalista

            }, {
                where: {
                    id_pedido: data.idPedido
                }
            })

            for (const criterio in data.criteriosAdicionais) {
                const valorCheckbox = data.criteriosAdicionais[criterio];
                console.log(`Atualizando CriteriosAvaliacao: id_pedido=${data.idPedido}, descricao_regra=${criterio}, status_checkbox=${valorCheckbox}`);
                await CriteriosAvaliacao.update(
                    { status_checkbox: valorCheckbox },
                    {
                        where: {
                            id_pedido: data.idPedido,
                            descricao_regra: criterio
                        }
                    }
                );
            }

            console.log(relatorioAtualizado)

            return res.status(201).json({ message: 'Relatório atualizado com sucesso!' })
        } catch (erro) {
            return res.status(500)
        }

    }

    static async listarRelatorios(req, res) {
        try {
            const relatorios = await RelatorioAnalista.findAll({
                where: { status_relatorio_analista: 1 },
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
            console.log(erro)
            res.status(500).json({ message: erro });
        }
    }

    static async listarCriterios(req, res) {

        const id = req.params.id
        try {
            const pedidos = await RelatorioAnalista.findOne({
                where: { id_relatorio_analista: id },
                attributes: ['qualidade_grao', 'formato_grao', 'nivel_agrotoxicos',
                    'limpeza_graos', 'info_recebedor_status', 'doc_status', 'analista_comentario'],
            })

            if (!pedidos) {
                return res.status(404).json({ message: 'Pedido não encontrado' });
            }

            const criterios = await CriteriosAvaliacao.findAll({
                where: { id_pedido: id },
                attributes: ['descricao_regra', 'status_checkbox']
            });

            const paresCriterios = criterios.reduce((pares, criterio) => {
                const { descricao_regra, status_checkbox } = criterio;
                pares[descricao_regra] = status_checkbox;
                return pares;
            }, {});

            const response = {
                ...pedidos.toJSON(),
                criteriosAdicionais: paresCriterios
            };

            res.status(200).json(response);

        } catch (erro) {
            res.status(500).json({ message: erro })
        }

    }

    static async atualizarRelatorioPorId(req, res) {
        const idRelatorio = req.parms.id;
        const dadosAtualizados = req.body;
        try {
            const relatorioAtualizado = await RelatorioAnalista.update(dadosAtualizados, {
                where: { id_relatorio_analista: idRelatorio }
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

    static async alterarStatusAnalista(req, res) {
        const oId_relatorio_analista = req.params.id

        console.log(oId_relatorio_analista)

        const aprovador = await RelatorioAnalista.findByPk(oId_relatorio_analista)


            try {
                if (aprovador.status_relatorio_analista == true) {
                    await RelatorioAnalista.update({
                        status_relatorio_analista: false
                    },{
                        where: {
                            id_relatorio_analista: oId_relatorio_analista
                        }
                    })
                } else {
                    await RelatorioAnalista.update({
                        status_relatorio_analista: true
                    },{
                        where: {
                            id_relatorio_analista: oId_relatorio_analista
                        }
                    })
                }
                return res.json({message: "Status do relatório do analista alterado com sucesso!", status: 201}).status(201)
            } catch (error) {
                return res.json(error).status(500)
            }
    }

    static async apagarRelatorio(req, res) {
        const idRelatorio = req.params.id

        const analista = await RelatorioAnalista.findByPk(idRelatorio)

        try {
            if (analista.status_relatorio_analista == true) {
                await RelatorioAnalista.update(
                    {
                        status_relatorio_analista: false,
                    },
                    {
                        where: {
                            id_relatorio_analista: idRelatorio,
                        }
                    }
                )
            } else {
                await RelatorioAnalista.update(
                    {
                        status_relatorio_analista: true,
                    },
                    {
                        where: {
                            id_relatorio_analista: idRelatorio,
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