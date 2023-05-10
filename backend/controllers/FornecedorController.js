const Fornecedor = require('../models/Fornecedor')

module.exports = class FornecedorControllers {

    static async cadastrarFornecedor(req, res) {
        const data = req.body.data

        if (!data.CNPJ) {
            return res.json({message: "Por favor, digite o CNPJ!"})
        }

        if (!data.IE) {
            return  res.json({message: "Por favor, digite o IE"})
        }

        if (!data.razao_social) {
            return res.json ({message: "Por favor, digite a Razao Social"})
        }

        if (!data.responsavel) {
            return res.json ({message: "Por favor, digite um responsavel!"})
        }

        if (!data.telefone) {
            return res.json ({message: "Por favor, digite um telefone"})
        }

        if (!data.tel_celular) {
            return res.json({message: "Por favor, digite o numero de celular!"})
        }

        if (!data.e_mail1) {
            return res.json({message: "Por favor, entre com um e-mail"})
        }

        if (!data.cep) {
            return res.json ({message: "Por favor, entre com o numero do CEP"})
        }

        if (!data.estado) {
            return res.json ({message: "Por favor, entre o seu estado "})
        }

        if (!data.cidade) {
            return res.json ({message: "Por favor, entre com a cidade"})
        }

        if (!data.bairro) {
            return res.json ({message: "Por favor, entre com o bairro!"})
        }

        if (!data.endereco) {
            return  res.json ({message: "Por favor, entre com o endereço"})
        }

        if (!data.numero) {
            return res.json ({message: "Por favor entre com o numero do local"})
        }

        if (!data.nome_fornecedor) {
            return res.json({message: "Por favor, digite o nome do fornecedor!"})
        }

/*         if (!data.nome_motorista) {
            return res.json({message: "Por favor, digite o nome do motorista!"})
        }

        if (!data.placa_veiculo) {
            return res.json({message: "Por favor, digite a placa do veiculo!"})
        }

        if (!data.documentos_anexos) {
            return res.json({message: "Por favor, anexe um documento!"})
        } */

        const fornecedor =  new Fornecedor({
            CNPJ: data.CNPJ,
            IE: data.IE,
            razao_social: data.razao_social,
            responsavel: data.responsavel,
            telefone: data.telefone,
            tel_celular: data.tel_celular,
            e_mail1: data.e_mail1,
            e_mail2: data.e_mail2,
            cep: data.cep,
            estado: data.estado,
            cidade: data.cidade,
            bairro: data.bairro,
            endereco: data.endereco,
            numero: data.numero,
            complemento: data.complemento,
            comentario: data.comentario,
            nome_fornecedor: data.nome_fornecedor,
            nome_motorista: data.nome_motorista,
            placa_veiculo: data.placa_veiculo,
            documentos_anexos: data.documentos_anexos,
            status_fornecedor: data.status_fornecedor

        })

        try {
            
            const novoFornecedor = await fornecedor.save()
            res.json({message: "Fornecedor cadastrado com sucesso!", status: 201}).status(201)
        } catch (error) {
            return res.json(error).status(500)
        }
    }

    static async deletarFornecedor(req, res) {
        const oId_fornecedor = req.params.id;
        try {
            const fornecedorAtualizado = await Fornecedor.destroy({
                where: { id_fornecedor: oId_fornecedor}
            });
            if (fornecedorAtualizado != undefined) {
                res.status(422).json({message: "Fornecedor Excluido com sucesso!"})
            } else {
                res.status(200).json({message: "Fornecedor não excluido !"})
            }
        } catch (error) {
            console.log(erro)
            res.json({message: error}).status(500)
        }
    }

    static async atualizarFornecedor(req, res) {
        const idForncedor = req.params.id
        const data = req.body


        if (!data.CNPJ) {
            return res.json({message: "Por favor, digite o CNPJ!"})
        }

        if (!data.IE) {
            return  res.json({message: "Por favor, digite o IE"})
        }

        if (!data.razao_social) {
            return res.json ({message: "Por favor, digite a Razao Social"})
        }

        if (!data.responsavel) {
            return res.json ({message: "Por favor, digite um responsavel!"})
        }

        if (!data.telefone) {
            return res.json ({message: "Por favor, digite um telefone"})
        }

        if (!data.tel_celular) {
            return res.json({message: "Por favor, digite o numero de celular!"})
        }

        if (!data.e_mail1) {
            return res.json({message: "Por favor, entre com um e-mail"})
        }

        if (!data.cep) {
            return res.json ({message: "Por favor, entre com o numero do CEP"})
        }

        if (!data.estado) {
            return res.json ({message: "Por favor, entre o seu estado "})
        }

        if (!data.cidade) {
            return res.json ({message: "Por favor, entre com a cidade"})
        }

        if (!data.bairro) {
            return res.json ({message: "Por favor, entre com o bairro!"})
        }

        if (!data.endereco) {
            return  res.json ({message: "Por favor, entre com o endereço"})
        }

        if (!data.numero) {
            return res.json ({message: "Por favor entre com o numero do local"})
        }

        if (!data.nome_fornecedor) {
            return res.json({message: "Por favor, digite o nome do fornecedor!"})
        }

        if (!data.nome_motorista) {
            return res.json({message: "Por favor, digite o nome do motorista!"})
        }

        if (!data.placa_veiculo) {
            return res.json({message: "Por favor, digite a placa do veiculo!"})
        }

        if (!data.documentos_anexos) {
            return res.json({message: "Por favor, anexe um documento!"})
        }

        try {
            await Fornecedor.update({
            CNPJ: data.CNPJ,
            IE: data.IE,
            razao_social: data.razao_social,
            responsavel: data.responsavel,
            telefone: data.telefone,
            tel_celular: data.tel_celular,
            e_mail1: data.e_mail1,
            e_mail2: data.e_mail2,
            cep: data.cep,
            estado: data.estado,
            cidade: data.cidade,
            bairro: data.bairro,
            endereco: data.endereco,
            numero: data.numero,
            complemento: data.complemento,
            comentario: data.comentario,
            nome_fornecedor: data.nome_fornecedor,
            nome_motorista: data.nome_motorista,
            placa_veiculo: data.placa_veiculo,
            documentos_anexos: data.documentos_anexos,
            status_fornecedor: data.status_fornecedor
            }, { 
                where: {
                    id_fornecedor: idForncedor
                }
            })
            res.status(200).json({message: 'Fornecedor atualizado com sucesso!'})
        } catch (error) {
            return res.json("deu erro").status(500)
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
        const idFornecedor = req.params.id
        const fornecedorProcurado = await Fornecedor.findByPk(idFornecedor)
        if (!fornecedorProcurado) {
            res.status(422).json({message: "Fornecedor não encontrado"})
        }

        res.status(200).json({message: fornecedorProcurado})
        
    }
}