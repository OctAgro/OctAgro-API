const RelatorioAnalista = require('../models/RelatorioAnalista')


module.exports = class RelatorioAnalista {

    static async criarRelatorioAnalista (req,res) {

        const data = req.body

        if (data.checkboxQualidadeGraoAprovado && data.checkboxQualidadeGraoReprovado) {
            return res.json({message: 'Não é possível marcar as duas opções ao mesmo tempo! A informação da Qualidade dos Grãos deve ser aprovada ou reprovada!', status: 500}).status(500) 
        } else if (!data.checkboxQualidadeGraoAprovado && !data.checkboxQualidadeGraoReprovado) {
            return res.json({message: 'Não é possível desmarcar as duas opções ao mesmo tempo! A informação do Qualidade dos Grãos deve ser aprovada ou reprovada!', status: 500}).status(500) 
        }
        
        if (data.checkboxFormatoGraoAprovado && data.checkboxFormatoGraoReprovado ) {
            return res.json({message: 'Não é possível marcar as duas opções ao mesmo tempo! A informação do Formato dos Grãos deve ser aprovada ou reprovada!', status: 500}).status(500) 
        } else if (!data.checkboxFormatoGraoAprovado && !data.checkboxFormatoGraoReprovado) {
            return res.json({message: 'Não é possível desmarcar as duas opções ao mesmo tempo! A informação do Formato dos Grãos deve ser aprovada ou reprovada!', status: 500}).status(500)
        }
        
        if (data.checkboxNivelAgrotoxicosAprovado && data.checkboxNivelAgrotoxicosReprovado) {
            return res.json({message: 'Não é possível marcar as duas opções ao mesmo tempo! A informação do Nivel de Agrotóxicos deve ser aprovada ou reprovada!', status: 500}).status(500) 
        } else if (!data.checkboxNivelAgrotoxicosAprovado && !data.checkboxNivelAgrotoxicosReprovado) {
            return res.json({message: 'Não é possível desmarcar as duas opções ao mesmo tempo! A informação do Nivel de Agrotóxicos deve ser aprovada ou reprovada!', status: 500}).status(500)
        }
        
        if (data.checkboxLimpezaGraosAprovado && data.checkboxLimpezaGraosReprovado) {
            return res.json({message: 'Não é possível marcar as duas opções ao mesmo tempo! A informação da Limpeza dos Grãos deve ser aprovada ou reprovada!', status: 500}).status(500) 
        } else if (!data.checkboxLimpezaGraosAprovado && !data.checkboxLimpezaGraosReprovado) {
            return res.json({message: 'Não é possível desmarcar as duas opções ao mesmo tempo! A informação da Limpeza dos Grãos deve ser aprovada ou reprovada!', status: 500}).status(500) 
        }

        const relatorioAnalista = new RelatorioAnalista ({

            qualidade_grao: data.checkboxQualidadeGraoAprovado,
            formato_grao: data.checkboxFormatoGraoAprovado,
            nivel_agrotoxicos: data.checkboxNivelAgrotoxicosAprovado,
            limpeza_graos: data.checkboxLimpezaGraosAprovado,
            analista_comentario: data.ComentarioAnalista
        })

        try {
            const novoRelatorioAnalista = await relatorioAnalista.save()
            res.status(201).json({message: 'Relatório salvo com sucesso!'})
        } catch(erro) {
            res.status(500).json({message: erro})
        }
    }


    static async encontrarRelatorioAnalista(req,res) {  

        const idRelatorio = req.parms.id
        const relatorioProcurado = RelatorioAnalista.findByPk (idRelatorio)

        if (!relatorioProcurado) {
            res.status(422).json({message: "Relatório não encontrado!"})
        }

        res.status(200).json({message: relatorioProcurado})

    }

    static async atualizarRelatorioAnalista(req,res) {
        const idRelatorio = req.parms.id

        const data = req.body


        if (data.checkboxQualidadeGraoAprovado && data.checkboxQualidadeGraoReprovado) {
            return res.json({message: 'Não é possível marcar as duas opções ao mesmo tempo! A informação da Qualidade dos Grãos deve ser aprovada ou reprovada!', status: 500}).status(500) 
        } else if (!data.checkboxQualidadeGraoAprovado && !data.checkboxQualidadeGraoReprovado) {
            return res.json({message: 'Não é possível desmarcar as duas opções ao mesmo tempo! A informação do Qualidade dos Grãos deve ser aprovada ou reprovada!', status: 500}).status(500) 
        }
        
        if (data.checkboxFormatoGraoAprovado && data.checkboxFormatoGraoReprovado ) {
            return res.json({message: 'Não é possível marcar as duas opções ao mesmo tempo! A informação do Formato dos Grãos deve ser aprovada ou reprovada!', status: 500}).status(500) 
        } else if (!data.checkboxFormatoGraoAprovado && !data.checkboxFormatoGraoReprovado) {
            return res.json({message: 'Não é possível desmarcar as duas opções ao mesmo tempo! A informação do Formato dos Grãos deve ser aprovada ou reprovada!', status: 500}).status(500)
        }
        
        if (data.checkboxNivelAgrotoxicosAprovado && data.checkboxNivelAgrotoxicosReprovado) {
            return res.json({message: 'Não é possível marcar as duas opções ao mesmo tempo! A informação do Nivel de Agrotóxicos deve ser aprovada ou reprovada!', status: 500}).status(500) 
        } else if (!data.checkboxNivelAgrotoxicosAprovado && !data.checkboxNivelAgrotoxicosReprovado) {
            return res.json({message: 'Não é possível desmarcar as duas opções ao mesmo tempo! A informação do Nivel de Agrotóxicos deve ser aprovada ou reprovada!', status: 500}).status(500)
        }
        
        if (data.checkboxLimpezaGraosAprovado && data.checkboxLimpezaGraosReprovado) {
            return res.json({message: 'Não é possível marcar as duas opções ao mesmo tempo! A informação da Limpeza dos Grãos deve ser aprovada ou reprovada!', status: 500}).status(500) 
        } else if (!data.checkboxLimpezaGraosAprovado && !data.checkboxLimpezaGraosReprovado) {
            return res.json({message: 'Não é possível desmarcar as duas opções ao mesmo tempo! A informação da Limpeza dos Grãos deve ser aprovada ou reprovada!', status: 500}).status(500) 
        }

        try {
            const relatorioAtualizado = await RelatorioAnalista.update ({

                qualidade_grao: data.checkboxQualidadeGraoAprovado,
                formato_grao: data.checkboxFormatoGraoAprovado,
                nivel_agrotoxicos: data.checkboxNivelAgrotoxicosAprovado,
                limpeza_graos: data.checkboxLimpezaGraosAprovado,
                analista_comentario: data.ComentarioAnalista

            }, { 
                where: {
                    id_relatorio_analista: idRelatorio
                }
                })

            res.status(200).json({message: 'Relatório atualizado com sucesso!'})
        } catch(erro) {
            res.status(500).json({message: erro})
        }

    }

    static async listaRelatorios (req,res) {
        try {
            const relatorios = await RelatorioAnalista.findAll();
            res.status(200).json(relatorios);
        } catch (erro) {
            res.status(500).json({ message: erro });
        }
    }

    static async atualizarRelatorioPorId (req,res) {
        const idRelatorio = req.parms.id;
        const dadosAtualizados = req.body;
        try {
            const relatorioAtualizado = await RelatorioAnalista.update(dadosAtualizados, {
                where: {id_relatorio_analista : idRelatorio}
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
}

            



        

        

        

        

        

        

    



