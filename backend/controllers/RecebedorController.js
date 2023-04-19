const RelatorioRecebedor = require("../models/RelatorioRecebedor")

module.exports = class RelatorioRecebedor {

    static async criarRelatorio(req, res){
        const {
            textoNomeFornecedor,
            textoNomeEntregador,
            textoPlacaVeiculo,
            dataDataEntrada,
            tempoHorarioEntrada,
            textoDocmento,
            textoProduto,
            numeroQuantidade,
            textoUnidadeMedida,
            checkboxColoracao,
            checkboxOdor,
            checkboxAusenciaAnimais,
            checkboxAusenciaMofo
        } = req.body

        const listaErros = []
        if(!)
    }

}