const Fornecedor = require('../models/Fornecedor')

module.exports = class FornecedorControllers {

    static async cadastrarFornecedor(req, res) {
        const{nome_fornecedor, nome_motorista, placa_veiculo, documentos_anexos} = req.body
        
        if (!nome_fornecedor) {
            return res.json({message: "Por favor, digite o nome do fornecedor!"})
        }

        else if (!nome_motorista) {
            return res.json({message: "Por favor, digite o nome do motorista!"})
        }

        else if (!placa_veiculo) {
            return res.json({message: "Por favor, digite a placa do veiculo!"})
        }

        else if (!documentos_anexos) {
            return res.json({message: "Por favor, anexe um documento!"})
        }

        const fornecedor = {
            nome_fornecedor,
            nome_motorista,
            placa_veiculo,
            documentos_anexos
        }

        try {
            await Fornecedor.create(fornecedor)
            res.json({message: "Fornecedor cadastrado com sucesso!", status: 201}).status(201)
        } catch (error) {
            return res.json(error).status(500)
        }
    }

    static async deletarFornecedor(req, res) {
        const oId_fornecedor = req.params.id_fornecedor
        try {
            await Fornecedor.destroy({
                where: {
                    id_fornecedor: oId_fornecedor
                }
            })
        } catch (error) {
            return res.json(error).status(500)
        }
    }

    static async atualizarFornecedor(req, res) {
        const oId_fornecedor = req.params.id_fornecedor

        const{nome_fornecedor, nome_motorista, placa_veiculo, documentos_anexos} = req.body
        
        if (!nome_fornecedor) {
            return res.json({message: "O nome do fornecedor não pode estar vazio!"})
        }

        else if (!nome_motorista) {
            return res.json({message: "O nome do motorista não pode estar vazio!"})
        }

        else if (!placa_veiculo) {
            return res.json({message: "A placa do veiculo não pode estar vazio!"})
        }

        else if (!documentos_anexos) {
            return res.json({message: "Anexe um documento, ele não pode estar vazio!"})
        }

        try {
            await Fornecedor.update({
                nome_fornecedor: req.body.nome_fornecedor,
                nome_motorista: req.body.nome_motorista,
                placa_veiculo: req.body.placa_veiculo,
                documentos_anexos: req.body.documentos_anexos
            }, { 
                where: {
                    id_fornecedor: oId_fornecedor
                }
            })
        } catch (error) {
            return res.json(error).status(500)
        }
    }

    static async listarFornecedor(req, res) {
        try {
            const oFornecedor = await Fornecedor.findAll()
            return res.json(oFornecedor).status(200)
        } catch (error) {
            return res.json(error).status(500)
        }
    }

    static async procurarFornecedor(req, res) {
        const oId_fornecedor = req.params.id_fornecedor

        try {
            const oFornecedor = await Fornecedor.findByPk(oId_fornecedor)
            return res.json(oFornecedor).status(200)
        } catch (error) {
            
        }
    }
}