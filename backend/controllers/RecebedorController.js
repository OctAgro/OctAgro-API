const RelatorioRecebedor = require("../models/RelatorioRecebedor")
const Pedido = require('../models/Pedido')
const Usuario = require('../models/Usuario')
const Produto = require('../models/Produto')
const Fornecedor = require('../models/Fornecedor')
const CriteriosAvaliacao = require('../models/CriteriosAvaliacao')

module.exports = class RelatorioController {
    static async criarRelatorio(req, res) {
        const data = req.body;

        console.log(data);

        if (data.checkboxColoracaoAprovado && data.checkboxColoracaoReprovado) {
            return res.status(500).json({ message: 'Escolha apenas uma das opções!' });
        } else if (!data.checkboxColoracaoAprovado && !data.checkboxColoracaoReprovado) {
            return res.status(500).json({ message: 'Escolha apenas uma das opções!' });
        }

        if (data.checkboxOdorAprovado && data.checkboxOdorReprovado) {
            return res.status(500).json({ message: 'Escolha apenas uma das opções!' });
        } else if (!data.checkboxOdorAprovado && !data.checkboxOdorReprovado) {
            return res.status(500).json({ message: 'Escolha apenas uma das opções!' });
        }

        if (data.checkboxAusenciaAnimaisAprovado && data.checkboxAusenciaAnimaisReprovado) {
            return res.status(500).json({ message: 'Escolha apenas uma das opções!' });
        } else if (!data.checkboxAusenciaAnimaisAprovado && !data.checkboxAusenciaAnimaisReprovado) {
            return res.status(500).json({ message: 'Escolha apenas uma das opções!' });
        }

        if (data.checkboxAusenciaMofoAprovado && data.checkboxAusenciaMofoReprovado) {
            return res.status(500).json({ message: 'Escolha apenas uma das opções!' });
        } else if (!data.checkboxAusenciaMofoAprovado && !data.checkboxAusenciaMofoReprovado) {
            return res.status(500).json({ message: 'Escolha apenas uma das opções!' });
        }

        const relatorioRecebedor = new RelatorioRecebedor({
            coloracao: data.checkboxColoracaoAprovado,
            odor: data.checkboxOdorAprovado,
            ausencia_animais: data.checkboxAusenciaAnimaisAprovado,
            ausencia_mofo: data.checkboxAusenciaMofoAprovado,
            id_pedido: data.idPedido,
            id_usuario: data.idUsuario
        });

        try {
            const novoRelatorioRecebedor = await relatorioRecebedor.save();
            const atualizacaoStatus = await Pedido.update(
                { status_aprovacao: 'Concluído' },
                { where: { id_pedido: data.idPedido }, returning: true }
            );

            for (const key in data) {
                if (key.startsWith('checkbox') && data[key] === true) {
                    const checkboxName = key.replace('checkbox', '').replace('Aprovado', '')
                    console.log(checkboxName)
                    relatorioRecebedor[checkboxName] = true;

                    const criteriosAtualizados = await CriteriosAvaliacao.update(
                        { id_pedido: data.idPedido, status_checkbox: relatorioRecebedor[checkboxName] },
                        { where: { descricao_regra: checkboxName } }
                    );
                }
            }

            res.status(201).json({ mensagem: 'Relatório aprovado com sucesso!' });
        } catch (erro) {
            console.log(erro);
            res.status(500).json(erro);
        }
    }

    static async atualizarRelatorio(req, res) {

        const data = req.body

        console.log(data)


        if (!data.textoNomeFornecedor) {
            return res.json({ message: 'O parametro Nome do Fornecedor não pode estar vazio!', status: 500 }).status(500)
        }

        if (!data.textoNomeEntregador) {
            return res.json({ message: 'O parametro Nome do Entregador não pode estar vazio!', status: 500 }).status(500)
        }

        if (!data.textoPlacaVeiculo) {
            return res.json({ message: 'O parametro Placa do Veículo não pode estar vazio!', status: 500 }).status(500)
        }

        /* if (!data.dataDataEntrada) {
            return res.json({ message: 'O parametro Data de Entrada não pode estar vazio!', status: 500 }).status(500)
        }

        if (!data.tempoHorarioEntrada) {
            return res.json({ message: 'O parametro Horario de Entrada não pode estar vazio!', status: 500 }).status(500)
        } */

        if (!data.textoProduto) {
            return res.json({ message: 'O parametro Nome do Produto não pode estar vazio!', status: 500 }).status(500)
        }

        if (!data.numeroQuantidade) {
            return res.json({ message: 'O parametro Quantidade não pode estar vazio!', status: 500 }).status(500)
        }

        if (!data.textoUnidadeMedida) {
            return res.json({ message: 'O parametro Unidade de Medida não pode estar vazio', status: 500 }).status(500)
        }

        if (data.checkboxColoracaoAprovado && data.checkboxColoracaoReprovado) {
            return res.json({ message: 'Escolha apenas uma das opções!', status: 500 }).status(500)
        } else if (!data.checkboxColoracaoAprovado && !data.checkboxColoracaoReprovado) {
            return res.json({ message: 'Escolha apenas uma das opções!', status: 500 }).status(500)
        }

        if (data.checkboxOdorAprovado && data.checkboxOdorReprovado) {
            return res.json({ message: 'Escolha apenas uma das opções!', status: 500 }).status(500)
        } else if (!data.checkboxOdorAprovado && !data.checkboxOdorReprovado) {
            return res.json({ message: 'Escolha apenas uma das opções!', status: 500 }).status(500)
        }

        if (data.checkboxAusenciaAnimaisAprovado && data.checkboxAusenciaAnimaisReprovado) {
            return res.json({ message: 'Escolha apenas uma das opções!', status: 500 }).status(500)
        } else if (!data.checkboxAusenciaAnimaisAprovado && !data.checkboxAusenciaAnimaisReprovado) {
            return res.json({ message: 'Escolha apenas uma das opções!', status: 500 }).status(500)
        }

        if (data.checkboxAusenciaMofoAprovado && data.checkboxAusenciaMofoReprovado) {
            return res.json({ message: 'Escolha apenas uma das opções!', status: 500 }).status(500)
        } else if (!data.checkboxAusenciaMofoAprovado && !data.checkboxAusenciaMofoReprovado) {
            return res.json({ message: 'Escolha apenas uma das opções!', status: 500 }).status(500)
        }

        try {
            const relatorioRecebedorAtualizado = await RelatorioRecebedor.update({
                coloracao: data.checkboxColoracaoAprovado,
                odor: data.checkboxOdorAprovado,
                ausencia_animais: data.checkboxAusenciaAnimaisAprovado,
                ausencia_mofo: data.checkboxAusenciaMofoAprovado
            }, {
                where: {
                    id_relatorio_recebedor: data.idPedido
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

            //encontrando os id de Produto e Fornecedor por meio do id de Pedido
            const pedido = await Pedido.findOne({
                where: { id_pedido: data.idPedido },
                include: [Produto, Fornecedor],
            });

            const idProduto = pedido.id_produto;
            const idFornecedor = pedido.id_fornecedor;

            const fornecedorAtualizado = await Fornecedor.update({
                nome_fornecedor: data.textoNomeFornecedor,
                nome_motorista: data.textoNomeEntregador,
                placa_veiculo: data.textoPlacaVeiculo
            }, {
                where: {
                    id_fornecedor: idFornecedor
                }
            })

            const produtoAtualizado = await Produto.update({
                nome_produto: data.textoProduto,
                quantidade_produto: data.numeroQuantidade,
                unidade_medida: data.textoUnidadeMedida
            }, {
                where: {
                    id_produto: idProduto
                }
            })

            res.status(200).json({ mensagem: 'Relatório atualizado com sucesso!' })
        } catch (erro) {
            console.log(erro)
            res.status(500).json({ mensagem: erro })
        }
    }

    static async listarRelatorios(req, res) {
        try {
            const relatoriosRecebedor = await RelatorioRecebedor.findAll({
                where: { status_recebedor: 1 },
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
            res.status(200).json(relatoriosRecebedor);
        } catch (erro) {
            res.status(500).json({ message: "Não há relatórios disponíveis no momento!" });
        }
    }

    static async listarRelatoriosById(req, res) {
        const id = req.params.id
        try {
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
                ],
            });

            if (!pedidos) {
                return res.status(404).json({ message: 'Pedido não encontrado' });
            }
            res.status(200).json(pedidos)
        } catch (erro) {
            res.status(500).json({ message: erro })
        }
    }

    static async listarCriterios(req, res) {
        const id = req.params.id;

        await RelatorioRecebedor.sync();

        try {
            const relatorio = await RelatorioRecebedor.findOne({
                where: { id_relatorio_recebedor: id },
                attributes: {
                    exclude: [
                        'id_relatorio_recebedor',
                        'status_aprovacao',
                        'id_pedido',
                        'id_usuario',
                        'status_recebedor',
                        'createdAt',
                        'updatedAt'
                    ]
                }
            });

            if (!relatorio) {
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
                ...relatorio.toJSON(),
                criteriosAdicionais: paresCriterios
            };

            res.status(200).json(response);
        } catch (erro) {
            res.status(500).json({ message: erro });
        }
    }

    static async apagarRelatorio(req, res) {
        const idRelatorio = req.params.id

        const recebedor = await RelatorioRecebedor.findByPk(idRelatorio)

        try {
            if (recebedor.status_recebedor == true) {
                await RelatorioRecebedor.update(
                    {
                        status_recebedor: false,
                    },
                    {
                        where: {
                            id_relatorio_recebedor: idRelatorio,
                        }
                    }
                )
            } else {
                await RelatorioRecebedor.update(
                    {
                        status_recebedor: true,
                    },
                    {
                        where: {
                            id_relatorio_recebedor: idRelatorio,
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

    static async alterarStatusRecebedor(req, res) {
        const oId_relatorio_recebedor = req.params.id

        console.log(oId_relatorio_recebedor)

        const recebedor = await RelatorioRecebedor.findByPk(oId_relatorio_recebedor)


        try {
            if (recebedor.status_recebedor == true) {
                await RelatorioRecebedor.update({
                    status_recebedor: false
                }, {
                    where: {
                        id_relatorio_recebedor: oId_relatorio_recebedor
                    }
                })
            } else {
                await RelatorioRecebedor.update({
                    status_recebedor: true
                }, {
                    where: {
                        id_relatorio_recebedor: oId_relatorio_recebedor
                    }
                })
            }
            return res.json({ message: "Status do relatório do recebedor alterado com sucesso!", status: 201 }).status(201)
        } catch (error) {
            return res.json(error).status(500)
        }
    }

}