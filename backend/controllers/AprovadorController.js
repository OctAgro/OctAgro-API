const RelatorioAprovador = require('../models/RelatorioAprovador')

module.exports = class AprovadorController {

    static async aprovadorFinalMercadoria(req, res) {
        //trazendo as informações preenchidas pelo usuario Aprovador através do "req.body"
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

            doc_status: checkboxDocumentacaoProdutoAprovado, 
            /* checkboxDocumentacaoProdutoReprovado, */
            info_recebedor_status: checkboxInfoRecebedorAprovado,
            /* checkboxInfoRecebedorReprovado, */
            info_analista_status: checkboxInfoAnalistaAprovado,
            /* checkboxInfoAnalistaReprovado, */
            revisao_aprovador: textoRevisaoFinalAprovador,
            status_final_aprovacao: statusFinalAprovacao
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
        const relatorioProcurado = await RelatorioAprovador.findByPk(idRelatorio)

        if (!relatorioProcurado) {
            res.status(422).json({mensagem: "Relatório não encontrado!"})
        }

        res.status(200).json({mensagem: relatorioProcurado})

    }


}