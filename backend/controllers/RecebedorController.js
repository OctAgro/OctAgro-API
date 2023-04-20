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
            checkboxColoracaoAprovado,
            checkboxColoracaoReprovado,
            checkboxOdorAprovado,
            checkboxOdorReprovado,
            checkboxAusenciaAnimaisAprovado,
            checkboxAusenciaAnimaisReprovado,
            checkboxAusenciaMofoAprovado,
            checkboxAusenciaMofoReprovado
        } = req.body


        const listaErros = []
        if(!textoNomeFornecedor){
            listaErros.push('O parametro não pode estar vasio!')
        }

        if(!textoNomeEntregador){
            listaErros.push('O parametro não pode estar vasio!')
        }

        if(!textoPlacaVeiculo){
            listaErros.push('O parametro não pode estar vasio!')
        }

        if(!dataDataEntrada){
            listaErros.push('O parametro não pode estar vasio!')
        }

        if(!tempoHorarioEntrada){
            listaErros.push('O parametro não pode estar vasio!')
        }

        if(!textoProduto){
            listaErros.push('O parametro não pode estar vasio!')
        }

        if(!numeroQuantidade){
            listaErros.push('O parametro não pode estar vasio!')
        }

        if(! textoUnidadeMedida){
            listaErros.push('O parametro não pode estar vasio!')
        }

        if (checkboxColoracaoAprovado && checkboxColoracaoReprovado) {
            listaErros.push('Escolha apenas uma das opções!')
        } else if (!checkboxColoracaoAprovado && !checkboxColoracaoReprovado){
            listaErros.push('Escolha apenas uma das opções!')
        }

        if (checkboxOdorAprovado && checkboxOdorReprovado) {
            listaErros.push('Escolha apenas uma das opções!')
        } else if (!checkboxOdorAprovado && !checkboxOdorReprovado){
            listaErros.push('Escolha apenas uma das opções!')
        }

        if (checkboxAusenciaAnimaisAprovado && checkboxAusenciaAnimaisReprovado) {
            listaErros.push('Escolha apenas uma das opções!')
        } else if (!checkboxAusenciaAnimaisAprovado && !checkboxAusenciaAnimaisReprovado){
            listaErros.push('Escolha apenas uma das opções!')
        }

        if (checkboxAusenciaMofoAprovado && checkboxAusenciaMofoReprovado) {
            listaErros.push('Escolha apenas uma das opções!')
        } else if (!checkboxAusenciaMofoAprovado && !checkboxAusenciaMofoReprovado){
            listaErros.push('Escolha apenas uma das opções!')
        }


        if(listaErros.length > 0){
            res.status(400).json({erros: listaErros})
        }


        const relatorioRecebedor = new RelatorioRecebedor({
            nome_fornecedor: textoNomeFornecedor,
            nome_entragador: textoNomeEntregador,
            placa_veiculo: textoPlacaVeiculo,
            data_entrada: dataDataEntrada,
            horario_entrada: tempoHorarioEntrada,
            documento_entrada: textoDocmento,
            produto: textoProduto,
            quantidade: numeroQuantidade,
            unidade_medida: textoUnidadeMedida,
            coloracao: checkboxColoracaoAprovado,
            odor: checkboxOdorAprovado,
            ausencia_animais: checkboxAusenciaAnimaisAprovado,
            ausencia_mofo: checkboxAusenciaMofoAprovado
        })


        try {
            const novoRelatorioRecebedor = await relatorioRecebedor.save()
            res.status(201).json({mensagem: 'Relatório aprovado com sucesso!', novoRelatorioRecebedor})
        } catch(erro) {
            res.status(500).jason({mensagem: erro})
        }
    }

    static async encontrarRelator(req, res){
        const idRelatorio = req.params.idRelatorio

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
            checkboxColoracaoAprovado,
            checkboxColoracaoReprovado,
            checkboxOdorAprovado,
            checkboxOdorReprovado,
            checkboxAusenciaAnimaisAprovado,
            checkboxAusenciaAnimaisReprovado,
            checkboxAusenciaMofoAprovado,
            checkboxAusenciaMofoReprovado
        } = req.body


        const listaErros = []
        if(!textoNomeFornecedor){
            listaErros.push('O parametro não pode estar vasio!')
        }

        if(!textoNomeEntregador){
            listaErros.push('O parametro não pode estar vasio!')
        }

        if(!textoPlacaVeiculo){
            listaErros.push('O parametro não pode estar vasio!')
        }

        if(!dataDataEntrada){
            listaErros.push('O parametro não pode estar vasio!')
        }

        if(!tempoHorarioEntrada){
            listaErros.push('O parametro não pode estar vasio!')
        }

        if(!textoProduto){
            listaErros.push('O parametro não pode estar vasio!')
        }

        if(!numeroQuantidade){
            listaErros.push('O parametro não pode estar vasio!')
        }

        if(! textoUnidadeMedida){
            listaErros.push('O parametro não pode estar vasio!')
        }

        if (checkboxColoracaoAprovado && checkboxColoracaoReprovado) {
            listaErros.push('Escolha apenas uma das opções!')
        } else if (!checkboxColoracaoAprovado && !checkboxColoracaoReprovado){
            listaErros.push('Escolha apenas uma das opções!')
        }

        if (checkboxOdorAprovado && checkboxOdorReprovado) {
            listaErros.push('Escolha apenas uma das opções!')
        } else if (!checkboxOdorAprovado && !checkboxOdorReprovado){
            listaErros.push('Escolha apenas uma das opções!')
        }

        if (checkboxAusenciaAnimaisAprovado && checkboxAusenciaAnimaisReprovado) {
            listaErros.push('Escolha apenas uma das opções!')
        } else if (!checkboxAusenciaAnimaisAprovado && !checkboxAusenciaAnimaisReprovado){
            listaErros.push('Escolha apenas uma das opções!')
        }

        if (checkboxAusenciaMofoAprovado && checkboxAusenciaMofoReprovado) {
            listaErros.push('Escolha apenas uma das opções!')
        } else if (!checkboxAusenciaMofoAprovado && !checkboxAusenciaMofoReprovado){
            listaErros.push('Escolha apenas uma das opções!')
        }


        if(listaErros.length > 0){
            res.status(400).json({erros: listaErros})
        }


        try {
            const relatorioRecebedorAtualizado = await relatorioRecebedor.update({
                nome_fornecedor: textoNomeFornecedor,
                nome_entragador: textoNomeEntregador,
                placa_veiculo: textoPlacaVeiculo,
                data_entrada: dataDataEntrada,
                horario_entrada: tempoHorarioEntrada,
                documento_entrada: textoDocmento,
                produto: textoProduto,
                quantidade: numeroQuantidade,
                unidade_medida: textoUnidadeMedida,
                coloracao: checkboxColoracaoAprovado,
                odor: checkboxOdorAprovado,
                ausencia_animais: checkboxAusenciaAnimaisAprovado,
                ausencia_mofo: checkboxAusenciaMofoAprovado
            }, {
                where: {
                    id_relatorio: idRelatorio
                }
            })

            
            res.status(200).json({mensagem: 'Relatório atualizado com sucesso!', relatorioRecebedorAtualizado})
        } catch(erro) {
            res.status(500).json({mensagem: erro})
        }
    }
}