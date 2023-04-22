const RelatorioAprovador = require('../models/RelatorioAprovador')

module.exports = class AprovadorController {

    //Função de criação do Relatorio de Aprovação a partir das informacoes providas pelo usuario
    static async criarRelatorioAprovacao(req, res) {
        //trazendo as informações preenchidas pelo usuario Aprovador através do "req.body"
        const data = req.body

        console.log(data)

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

        console.log(data.checkboxDocumentacaoProdutoAprovado)

        //Salvando dados na Tabela do Banco de Dados
        const relatorioAprovador = new RelatorioAprovador({

            doc_status: data.checkboxDocumentacaoProdutoAprovado, 
            /* checkboxDocumentacaoProdutoReprovado, */
            info_recebedor_status: data.checkboxInfoRecebedorAprovado,
            /* checkboxInfoRecebedorReprovado, */
            info_analista_status: data.checkboxInfoAnalistaAprovado,
            /* checkboxInfoAnalistaReprovado, */
            revisao_aprovador: data.textoRevisaoFinalAprovador,
            status_final_aprovacao: data.statusFinalAprovacao
        })

        try {
            const novoRelatorioAprovador = await relatorioAprovador.save()
            res.status(201).json({message: 'Relatório salvo com sucesso!'})
        } catch(erro) {
            res.status(500).json({message: erro})
        }
    }

    //Função de encontrar Relatório pelo Id
    static async encontrarRelatorioPorId(req,res) {
        const idRelatorio = req.params.id

        const relatorioProcurado = await RelatorioAprovadores.findByPk(idRelatorio)

        if (!relatorioProcurado) {
            res.status(422).json({message: "Relatório não encontrado!"})
        }

        res.status(200).json({message: relatorioProcurado})

    }

    // Função para atualizar um relatório de aprovação pelo ID
    static async atualizarRelatorioAprovacao(req, res) {
        const idRelatorio = req.params.id
        const data = req.body

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

        try {
            const relatorioAtualizado = await RelatorioAprovadores.update({
                doc_status: data.heckboxDocumentacaoProdutoAprovado, 
                info_recebedor_status: data.checkboxInfoRecebedorAprovado,
                info_analista_status: data.checkboxInfoAnalistaAprovado,
                revisao_aprovador: data.textoRevisaoFinalAprovador,
                status_final_aprovacao: data.statusFinalAprovacao
            }, {
                where: {
                    id_relatorio_aprovador: idRelatorio
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
            const relatorios = await RelatorioAprovador.findAll();
            res.status(200).json(relatorios);
        } catch (erro) {
            res.status(500).json({ message: erro });
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

}