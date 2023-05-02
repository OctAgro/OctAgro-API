const Produto = require('../models/Produto')

module.exports = class ProdutoControllers {
    
    static async cadastrarProduto(req, res) {
        const{nome_produto, quantidade_produto, unidade_medida, descricao, data_entrada_empresa, hora_entrada_empresa} = req.body

        if (!nome_produto) {
            return res.json({message: "Por favor, adicione um nome ao produto cadastrado!", status: 500}).status(500)
        }

        else if (!quantidade_produto) {
            return res.json({message: "Por favor, digite a quantidade do produto!", status: 500}).status(500)
        }

        else if (!unidade_medida) {
            return res.json({message: "Por favor, digite a unidade de medida do produto!", status: 500}).status(500)
        }

        else if (!descricao) {
            return res.json({message: "Por favor, dê uma descrição ao produto!", status: 500}).status(500)
        }

        else if (!data_entrada_empresa) {
            return res.json({message: "Por favor, adicione uma data de entrega da empresa", status: 500}).status(500)
        }

        else if(!hora_entrada_empresa) {
            return res.json({message: "Por favor, adicione um horário para entrega do Produto", status: 500}).status(500)
        }

        const produto = {
            nome_produto, 
            quantidade_produto, 
            unidade_medida, 
            descricao, 
            data_entrada_empresa, 
            hora_entrada_empresa
        }

        try {
            await Produto.create(produto)
            return res.json({message: "Produto cadastrado com sucesso!", status: 201}).status(201)
        } catch (error) {
            return res.json(error).status(500)
        }
    }
}