const Produto = require('../models/Produto')

module.exports = class ProdutoControllers {
    
    static async cadastrarProduto(req, res) {
        const data = req.body

        if (!data.nome_produto) {
            return res.json({message: "Por favor, adicione um nome ao produto cadastrado!", status: 500}).status(500)
        }

        if (!data.tipo) {
            return res.json({message: "Por favor, adicione um tipo", status: 500}).status(500)
        }

        else if (!data.quantidade_produto) {
            return res.json({message: "Por favor, digite a quantidade do produto!", status: 500}).status(500)
        }

        else if (!data.unidade_medida) {
            return res.json({message: "Por favor, digite a unidade de medida do produto!", status: 500}).status(500)
        }

        else if (!data.descricao) {
            return res.json({message: "Por favor, dê uma descrição ao produto!", status: 500}).status(500)
        }

        else if (!data.data_entrada_empresa) {
            return res.json({message: "Por favor, adicione uma data de entrega da empresa", status: 500}).status(500)
        }

        else if(!data.hora_entrada_empresa) {
            return res.json({message: "Por favor, adicione um horário para entrega do Produto", status: 500}).status(500)
        }

        const produto = {
            nome_produto: data.nome_produto,
            tipo: data.tipo, 
            quantidade_produto: data.quantidade_produto, 
            unidade_medida: data.unidade_medida, 
            descricao: data.descricao, 
            data_entrada_empresa: data.data_entrada_empresa, 
            hora_entrada_empresa: data.hora_entrada_empresa
        }

        try {
            await Produto.create(produto)
            return res.json({message: "Produto cadastrado com sucesso!", status: 201}).status(201)
        } catch (error) {
            return res.json(error).status(500)
        }
    }

    static async deletarProduto(req, res) {
        const oId_produto = req.params.id_produto
        try {
            await Produto.destroy({ 
                where: {
                    id_produto: oId_produto 
                } 
            })
            return res.json({message: "Produto excluído com sucesso!", status: 201}).status(201)
        } catch (error) {
            return res.json(error).status(500)
        }
    }

    static async atualizarProduto(req, res) {
        const oId_produto = req.params.id

        const data = req.body

        if (!data.nome_produto) {
            return res.json({message: "Por favor, adicione um nome ao produto cadastrado!", status: 500}).status(500)
        }

        if (!data.tipo) {
            return res.json({message: "Por favor, adicione um tipo", status: 500}).status(500)
        }

        else if (!data.quantidade_produto) {
            return res.json({message: "Por favor, digite a quantidade do produto!", status: 500}).status(500)
        }

        else if (!data.unidade_medida) {
            return res.json({message: "Por favor, digite a unidade de medida do produto!", status: 500}).status(500)
        }

        else if (!data.descricao) {
            return res.json({message: "Por favor, dê uma descrição ao produto!", status: 500}).status(500)
        }

        else if (!data.data_entrada_empresa) {
            return res.json({message: "Por favor, adicione uma data de entrega da empresa", status: 500}).status(500)
        }

        else if(!data.hora_entrada_empresa) {
            return res.json({message: "Por favor, adicione um horário para entrega do Produto", status: 500}).status(500)
        }

        try {
            const atualizarProduto = await Produto.update({            
                nome_produto: data.nome_produto,
                tipo: data.tipo, 
                quantidade_produto: data.quantidade_produto, 
                unidade_medida: data.unidade_medida, 
                descricao: data.descricao, 
                data_entrada_empresa: data.data_entrada_empresa, 
                hora_entrada_empresa: data.hora_entrada_empresa
                },{
                where: {
                    id_produto: oId_produto
                }
            })
            console.log(atualizarProduto)
            return res.json({message: "Produto atualizado com sucesso!", status: 201}).status(201)
        } catch (error) {
            return res.json(error).status(500)
        }
    }

    static async listarProduto(req, res) {
        try {
            const produto = await Produto.findAll()
            return res.json(produto).status(201)
        } catch (error) {
            return res.json(error).status(500)
        }
    }

    static async procurarProduto(req, res) {
        const oId_produto = req.params.id
        const produtoProcurado = await Produto.findByPk(oId_produto)

        if (!produtoProcurado) {
            res.status(422).json({message: "Produto não encontrado"})
        }

        res.status(200).json({message: produtoProcurado})
        
    }

    static async alterarStatusProduto(req, res) {
        const oId_produto = req.params.id_produto

        console.log(oId_produto)

        const produto = await Produto.findByPk(oId_produto)


            try {
                if (produto.status_produto === 1) {
                    await Produto.update({
                        status_produto: 0
                    },{
                        where: {
                            id_produto: oId_produto
                        }
                    })
                } else {
                    await Produto.update({
                        status_produto: 1
                    },{
                        where: {
                            id_produto: oId_produto
                        }
                    })
                }
                return res.json({message: "Status do produto alterado com sucesso!", status: 201}).status(201)
            } catch (error) {
                return res.json(error).status(500)
            }
    }
    
}