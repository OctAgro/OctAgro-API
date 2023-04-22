const RelatorioAprovador = require('../models/RelatorioAprovador')

module.exports = class AprovadorController {

    //Função de criação do Relatorio de Aprovação a partir das informacoes providas pelo usuario
    static async criarRelatorioAprovacao(req, res) {
        //trazendo as informações preenchidas pelo usuario Aprovador através do "req.body"
        const data = req.body

        console.log(data)

        //checando se as checkboxs/caixas de seleção estão corretamente preenchidas
        const listaErros = []

        if (data.checkboxDocumentacaoProdutoAprovado && data.checkboxDocumentacaoProdutoReprovado) {
            listaErros.push('Não é possível marcar as duas opções ao mesmo tempo! A informação do Recebedor deve ser aprovada ou reprovada!')
        } else if (!data.checkboxInfoRecebedorAprovado && !data.checkboxInfoRecebedorReprovado){
            listaErros.push('Não é possível desmarcar as duas opções ao mesmo tempo! A informação do Recebedor deve ser aprovada ou reprovada!')
        }

        if (data.checkboxInfoRecebedorAprovado && data.checkboxInfoRecebedorReprovado) {
            listaErros.push('Não é possível marcar as duas opções ao mesmo tempo! A informação do Recebedor deve ser aprovada ou reprovada!')
        } else if (!data.checkboxInfoRecebedorAprovado && !data.checkboxInfoRecebedorReprovado){
            listaErros.push('Não é possível desmarcar as duas opções ao mesmo tempo! A informação do Recebedor deve ser aprovada ou reprovada!')
        }

        if (data.checkboxInfoAnalistaAprovado && data.checkboxInfoAnalistaReprovado) {
            listaErros.push('Não é possível marcar as duas opções ao mesmo tempo! A informação do Analista deve ser aprovada ou reprovada!')
        } else if (!data.checkboxInfoAnalistaAprovado && !data.checkboxInfoAnalistaReprovado){
            listaErros.push('Não é possível desmarcar as duas opções ao mesmo tempo! A informação do Analista deve ser aprovada ou reprovada!')
        }

        console.log(data.checkboxDocumentacaoProdutoAprovado)

        /* //OBS: O campo de texto do "req.body.textoRevisaoFinalAprovador" pode ser preenchido ou não, por isso não está sendo verificado! Apenas irá ser encaminado com '' se nada for preenchido
        if (!textoRevisaoFinalAprovador) {
            req.body.textoRevisaoFinalAprovador = ''
            res.status(200).json({mensagem: 'passou!'})
        } */

        //verificando a lista de erros, se houver uma ou mais incidências, ele mostra o erro e seu status; se não tudo é aprovado
        if (listaErros.length > 0) {
            res.status(400).json({ erros: listaErros })
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
            status_final_aprovacao: data.statusFinalAprovacao
        })

        try {
            const novoRelatorioAprovador = await relatorioAprovador.save()
            res.status(201).json({mensagem: 'Relatório salvo com sucesso!', novoRelatorioAprovador})
        } catch(erro) {
            res.status(500).json({mensagem: erro})
        }
    }

    //Função de encontrar Relatório pelo Id
    static async encontrarRelatorioPorId(req,res) {
        const idRelatorio = req.params.id
        const relatorioProcurado = await RelatorioAprovadores.findByPk(idRelatorio)

        if (!relatorioProcurado) {
            res.status(422).json({mensagem: "Relatório não encontrado!"})
        }

        res.status(200).json({mensagem: relatorioProcurado})

    }

    // Função para atualizar um relatório de aprovação pelo ID
    static async atualizarRelatorioAprovacao(req, res) {
        const idRelatorio = req.params.id
        const { 
            checkboxDocumentacaoProdutoAprovado, 
            checkboxDocumentacaoProdutoReprovado,
            checkboxInfoRecebedorAprovado,
            checkboxInfoRecebedorReprovado,
            checkboxInfoAnalistaAprovado,
            checkboxInfoAnalistaReprovado,
            textoRevisaoFinalAprovador,
            statusFinalAprovacao } = req.body

        //checando se as checkboxs/caixas de seleção estão corretamente preenchidas
        const listaErros = []

        if (checkboxDocumentacaoProdutoAprovado && checkboxDocumentacaoProdutoReprovado) {
            listaErros.push('Não é possível marcar as duas opções ao mesmo tempo! A informação do Recebedor deve ser aprovada ou reprovada!')
        } else if (!checkboxInfoRecebedorAprovado && !checkboxInfoRecebedorReprovado){
            listaErros.push('Não é possível desmarcar as duas opções ao mesmo tempo! A informação do Recebedor deve ser aprovada ou reprovada!')
        }

        if (checkboxInfoRecebedorAprovado && checkboxInfoRecebedorReprovado) {
            listaErros.push('Não é possível marcar as duas opções ao mesmo tempo! A informação do Recebedor deve ser aprovada ou reprovada!')
        } else if (!checkboxInfoRecebedorAprovado && !checkboxInfoRecebedorReprovado){
            listaErros.push('Não é possível desmarcar as duas opções ao mesmo tempo! A informação do Recebedor deve ser aprovada ou reprovada!')
        }

        if (checkboxInfoAnalistaAprovado && checkboxInfoAnalistaReprovado) {
            listaErros.push('Não é possível marcar as duas opções ao mesmo tempo! A informação do Analista deve ser aprovada ou reprovada!')
        } else if (!checkboxInfoAnalistaAprovado && !checkboxInfoAnalistaReprovado){
            listaErros.push('Não é possível desmarcar as duas opções ao mesmo tempo! A informação do Analista deve ser aprovada ou reprovada!')
        }

        if (listaErros.length > 0) {
            res.status(400).json({ erros: listaErros })
        }

        try {
            const relatorioAtualizado = await RelatorioAprovadores.update({
                doc_status: checkboxDocumentacaoProdutoAprovado, 
                info_recebedor_status: checkboxInfoRecebedorAprovado,
                info_analista_status: checkboxInfoAnalistaAprovado,
                revisao_aprovador: textoRevisaoFinalAprovador,
                status_final_aprovacao: statusFinalAprovacao
            }, {
                where: {
                    id_relatorio_aprovador: idRelatorio
                }
            })
            res.status(200).json({mensagem: 'Relatório atualizado com sucesso!', relatorioAtualizado})
        } catch(erro) {
            res.status(500).json({mensagem: erro})
        }
    }

    // Função para listar todos os relatórios de aprovação
    static async listarRelatorios(req, res) {
        try {
            const relatorios = await RelatorioAprovadores.findAll();
            res.status(200).json(relatorios);
        } catch (erro) {
            res.status(500).json({ mensagem: erro });
        }
    }

    // Função para atualizar um relatório de aprovação pelo ID
    static async atualizarRelatorioPorId(req, res) {
        const idRelatorio = req.params.id;
        const dadosAtualizados = req.body;
        try {
            const relatorioAtualizado = await RelatorioAprovadores.update(dadosAtualizados, {
                where: { id_relatorio_aprovador: idRelatorio }
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