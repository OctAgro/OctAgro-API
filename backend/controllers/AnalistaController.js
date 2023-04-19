const RelatorioAnalista = require('../models/RelatorioAnalista')


module.exports = class RelatorioAnalista {

    static async criarRelatorioAnalista (req,res) {

        const { checkboxQualidadeGraoAprovado,
                checkboxQualidadeGraoReprovado,
                checkboxFormatoGraoAprovado,
                checkboxFormatoGraoReprovado,
                checkboxNivelAgrotoxicosAprovado,
                checkboxNivelAgrotoxicosReprovado,
                checkboxLimpezaGraosAprovado,
                checkboxLimpezaGraosReprovado,
                ComentarioAnalista
        } = req.body

        const listaErros = []

        if (checkboxQualidadeGraoAprovado && checkboxQualidadeGraoReprovado) {
            listaErros.push('Não é possível marcar as duas opções ao mesmo tempo! A informação do Recebedor deve ser aprovada ou reprovada!') }
            else if (!checkboxQualidadeGraoAprovado && !checkboxQualidadeGraoReprovado) {
                listaErros.push('Não é possível marcar as duas opções ao mesmo tempo! A informação do Recebedor deve ser aprovada ou reprovada!')
            }
        
        if ( checkboxFormatoGraoAprovado && checkboxFormatoGraoReprovado ) {
            listaErros.push('Não é possível marcar as duas opções ao mesmo tempo! A informação do Recebedor deve ser aprovada ou reprovada!') }
            else if (!checkboxFormatoGraoAprovado && !checkboxFormatoGraoReprovado) {
                listaErros.push('Não é possível marcar as duas opções ao mesmo tempo! A informação do Recebedor deve ser aprovada ou reprovada!')
            }
        
        if (checkboxNivelAgrotoxicosAprovado && checkboxNivelAgrotoxicosReprovado) {
            listaErros.push('Não é possível marcar as duas opções ao mesmo tempo! A informação do Recebedor deve ser aprovada ou reprovada!') } 
            else if (!checkboxNivelAgrotoxicosAprovado && !checkboxNivelAgrotoxicosReprovado) {
                listaErros.push('Não é possível marcar as duas opções ao mesmo tempo! A informação do Recebedor deve ser aprovada ou reprovada!')
            }
        
        if ( checkboxLimpezaGraosAprovado && checkboxLimpezaGraosReprovado) {
            listaErros.push('Não é possível marcar as duas opções ao mesmo tempo! A informação do Recebedor deve ser aprovada ou reprovada!') }
            else if ( !checkboxLimpezaGraosAprovado && !checkboxLimpezaGraosReprovado) {listaErros.push('Não é possível marcar as duas opções ao mesmo tempo! A informação do Recebedor deve ser aprovada ou reprovada!')
        }
        
        if (listaErros.length > 0) {
            res.status(400).json({ erros: listaErros })
        }

        const relatorioAnalista = new RelatorioAnalista ({

            qualidade_grao: checkboxQualidadeGraoAprovado,
            formato_grao: checkboxFormatoGraoAprovado,
            nivel_agrotoxicos: checkboxNivelAgrotoxicosAprovado,
            limpeza_graos: checkboxLimpezaGraosAprovado,
            analista_comentario: ComentarioAnalista
        })

        try {
            const novoRelatorioAprovador = await relatorioAprovador.save()
            res.status(201).json({mensagem: 'Relatório salvo com sucesso!', novoRelatorioAprovador})
        } catch(erro) {
            res.status(500).json({mensagem: erro})
        }
        }


        static async encontrarRelatorioAnalista(req,res) {  

            const idRelatorio = req.parms.id
            const relatorioProcurado = RelatorioAnalista.findByPk (idRelatorio)

            if (!relatorioProcurado) {
                res.status(422).json({mensagem: "Relatório não encontrado!"})
            }
    
            res.status(200).json({mensagem: relatorioProcurado})

        }

        static async atualizarRelatorioAnalista(req,res) {
            const idRelatorio = req.parms.id

            const { checkboxQualidadeGraoAprovado,
                checkboxQualidadeGraoReprovado,
                checkboxFormatoGraoAprovado,
                checkboxFormatoGraoReprovado,
                checkboxNivelAgrotoxicosAprovado,
                checkboxNivelAgrotoxicosReprovado,
                checkboxLimpezaGraosAprovado,
                checkboxLimpezaGraosReprovado,
                ComentarioAnalista
                    } = req.body

                    const listaErros = []

                    if (checkboxQualidadeGraoAprovado && checkboxQualidadeGraoReprovado) {
                        listaErros.push('Não é possível marcar as duas opções ao mesmo tempo! A informação do Recebedor deve ser aprovada ou reprovada!') }
                        else if (!checkboxQualidadeGraoAprovado && !checkboxQualidadeGraoReprovado) {
                            listaErros.push('Não é possível marcar as duas opções ao mesmo tempo! A informação do Recebedor deve ser aprovada ou reprovada!')
                        }
                    
                    if ( checkboxFormatoGraoAprovado && checkboxFormatoGraoReprovado ) {
                        listaErros.push('Não é possível marcar as duas opções ao mesmo tempo! A informação do Recebedor deve ser aprovada ou reprovada!') }
                        else if (!checkboxFormatoGraoAprovado && !checkboxFormatoGraoReprovado) {
                            listaErros.push('Não é possível marcar as duas opções ao mesmo tempo! A informação do Recebedor deve ser aprovada ou reprovada!')
                        }
                    
                    if (checkboxNivelAgrotoxicosAprovado && checkboxNivelAgrotoxicosReprovado) {
                        listaErros.push('Não é possível marcar as duas opções ao mesmo tempo! A informação do Recebedor deve ser aprovada ou reprovada!') } 
                        else if (!checkboxNivelAgrotoxicosAprovado && !checkboxNivelAgrotoxicosReprovado) {
                            listaErros.push('Não é possível marcar as duas opções ao mesmo tempo! A informação do Recebedor deve ser aprovada ou reprovada!')
                        }
                    
                    if ( checkboxLimpezaGraosAprovado && checkboxLimpezaGraosReprovado) {
                        listaErros.push('Não é possível marcar as duas opções ao mesmo tempo! A informação do Recebedor deve ser aprovada ou reprovada!') }
                        else if ( !checkboxLimpezaGraosAprovado && !checkboxLimpezaGraosReprovado) {listaErros.push('Não é possível marcar as duas opções ao mesmo tempo! A informação do Recebedor deve ser aprovada ou reprovada!')
                    }
                    
                    if (listaErros.length > 0) {
                        res.status(400).json({ erros: listaErros })
                    }

                    try {
                        const relatorioAtualizado = await RelatorioAnalista.update ({

                            qualidade_grao: checkboxQualidadeGraoAprovado,
                            formato_grao: checkboxFormatoGraoAprovado,
                            nivel_agrotoxicos: checkboxNivelAgrotoxicosAprovado,
                            limpeza_graos: checkboxLimpezaGraosAprovado,
                            analista_comentario: ComentarioAnalista

                        }, { 
                            where: {
                                id_relatorio_analista: idRelatorio
                            }
                         })
                         res.status(200).json({mensagem: 'Relatório atualizado com sucesso!', relatorioAtualizado})
                    } catch(erro) {
                        res.status(500).json({mensagem: erro})
                    }

            }

            static async listaRelatorios (req,res) {
                try {
                    const relatorios = await RelatorioAnalista.findAll();
                    res.status(200).json(relatorios);
            } catch (erro) {
            res.status(500).json({ mensagem: erro });
            }
                }

            static async atualizarRelatorioPorId (req,res) {
                const idRelatorio =req.parms.id;
                const dadosAtualizados = req.body;
                try {
                    const relatorioAtualizado = await RelatorioAnalista.update(dadosAtualizados, {
                        where: {id_relatorio_analista : idRelatorio}
                    });
                    if (relatorioAtualizado[0] === 0) {
                        res.status(422).json({ mensagem: "Relatório não encontrado!" });
                    } else {
                        res.status(200).json({ mensagem: "Relatório atualizado com sucesso!" });
                    }
                } catch (erro) {
                    res.status(500).json({ mensagem: erro });
                }
                }
            }

            



        

        

        

        

        

        

    



