//const RelatorioAprovador = require('../models/Aprovador')

module.exports = class AprovadorController {

    static async getHome(req,res) {
        res.json('Bem vindo, aprovador!')
    }

    static async postHome(req,res) {
        res.json({messagem: 'Bem vindo a sua página, aprovador!'})
    }

    static async aprovadorFinalMercadoria(req, res) {
        //trazendo as informações preenchidas pelo usuario Aprovador através do "req.body"
        const { 
            checkboxDocumentacaoProdutoAprovado, 
            checkboxDocumentacaoProdutoReprovado,
            checkboxInfoRecebedorAprovado,
            checkboxInfoRecebedorReprovado,
            checkboxInfoAnalistaAprovado,
            checkboxInfoAnalistaReprovado,
            textoRevisaoFinalAprovador } = req.body

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
        } else {
            res.status(200).json({ mensagem: 'Certo!' })
        }

    }
}