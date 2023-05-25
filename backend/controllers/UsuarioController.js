const Usuario = require('../models/Usuario')

const bcrypt = require('bcryptjs')

module.exports = class UsuarioControllers {

    static async registrarUsuarioPost(req, res) {
        const data = req.body.data
        console.log('Backend', data)

        if (!data.data_admissao) {
            return res.json({ message: "Por favor, adicione uma data de admissão válida!", status: 500 }).status(500)
        }
        else if (!data.senha) {
            return res.json({ message: "Por favor, adicione uma senha!", status: 500 }).status(500)
        }

        // não possuimos confirmar senha no form

        /*         //checagem se a senha é a mesma de confirmar senha
                if (data.senha != data.confirmarSenha) {
                    //mensagem
                    return res.json({message: "As senhas não conferem, tente novamente!", status: 500}).status(500)
                    //res.render('/usuario/registrarUsuario')
        
                } */
        else if (!data.funcao) {
            return res.json({ message: "Por favor, adicione uma função!", status: 500 }).status(500)
        }

        if (!data.nome) {
            return res.json({ message: "Por favor, adicione um nome!", status: 500 }).status(500)
        }

        else if (!data.CPF) {
            return res.json({ message: "Por favor, adicione um CPF!", status: 500 }).status(500)
        }

        else if (!data.RG) {
            return res.json({ message: "Por favor, adicione um RG!", status: 500 }).status(500)
        }

        else if (!data.dataNascimento) {
            return res.json({ message: "Por favor, adicione a data de nacimento!", status: 500 }).status(500)
        }

        else if (!data.genero) {
            return res.json({ message: "Por favor, adicione o gênero!", status: 500 }).status(500)
        }

        else if (!data.telefone) {
            return res.json({ message: "Por favor, adicione um telefone!", status: 500 }).status(500)
        }

        else if (!data.celular) {
            return res.json({ message: "Por favor, adicione um numero de celular valido!", status: 500 }).status(500)
        }

        else if (!data.email) {
            return res.json({ message: "Por favor, adicione um e-mail válido!", status: 500 }).status(500)
        }

        else if (!data.cep) {
            return res.json({ message: "Por favor, adicione um cep valido!", status: 500 }).status(500)
        }

        else if (!data.endereco) {
            return res.json({ message: "Por favor, adicione um endereço!", status: 500 }).status(500)
        }

        else if (!data.numero) {
            return res.json({ message: "Por favor, adicione um numero!", status: 500 }).status(500)
        }

        else if (!data.bairro) {
            return res.json({ message: "Por favor, adicione um bairro!", status: 500 }).status(500)
        }

        else if (!data.cidade) {
            return res.json({ message: "Por favor, adicione uma cidade!", status: 500 }).status(500)
        }

        else if (!data.estado) {
            return res.json({ message: "Por favor, adicione uma cidade!", status: 500 }).status(500)
        }


        //checar se usuário existe
        const checarSeUsuarioExiste = await Usuario.findOne({
            where: { email: data.email }
        })

        const checarSeCPFExiste = await Usuario.findOne({
            where: { CPF: data.CPF }
        })

        const checarSeRGExiste = await Usuario.findOne({
            where: { RG: data.RG }
        })

        //checagem se existe dados repetidos
        if (checarSeUsuarioExiste) {
            return res.json({ message: "O e-mail já está cadastrado!", status: 500 }).status(500)
        } else if (checarSeCPFExiste) {
            return res.json({ message: "O CPF já está cadastrado!", status: 500 }).status(500)
        } else if (checarSeRGExiste) {
            return res.json({ message: "O RG já está cadastrado!", status: 500 }).status(500)
        }

        const salt = bcrypt.genSaltSync(10)
        const hashedSenha = bcrypt.hashSync(data.senha, salt)

        //transformar Masculino em M, Feminino em F, e Outro em O (pegar primeira letra da palavra)
        const generoTransformado = data.genero[0]

        const usuario = {
            data_admissao: data.data_admissao,
            senha: hashedSenha,
            funcao: data.funcao,
            nome: data.nome,
            CPF: data.CPF,
            RG: data.RG,
            dataNascimento: data.dataNascimento,
            genero: generoTransformado,
            telefone: data.telefone,
            celular: data.celular,
            email: data.email,
            cep: data.cep,
            endereco: data.endereco,
            numero: data.numero,
            complemento: data.complemento,
            bairro: data.bairro,
            cidade: data.cidade,
            estado: data.estado,
            foto: data.foto,
            status_usuario: data.status_usuario

        }

        try {
            await Usuario.create(usuario)
            // req.json('message', 'Cadastro realizado com sucesso!')
            return res.json({ message: "Sucesso ao criar usuário!", status: 201 }).status(201)
            //res.redirect('/')
        } catch (error) {
            return res.json(error).status(500)
        }
    }

    //função de logar
    static async loginPost(req, res) {
        const data = req.body

        if (!data.email) {
            return res.json({ message: "Por favor, digite seu e-mail!", status: 500 }).status(500)
        }

        else if (!data.senha) {
            return res.json({ message: "Por favor, digite sua senha!", status: 500 }).status(500)
        }

        //checar se usuário existe
        const checarUsuario = await Usuario.findOne({ where: { email: data.email } })

        if (!checarUsuario) {
            return res.json({ message: "Usuário não encontrado!", status: 500 }).status(500)
        }

        const checarSenha = bcrypt.compareSync(data.senha, checarUsuario.senha)

        if (!checarSenha) {
            return res.json({ message: "A senha digitada está inválida!", status: 500 }).status(500)
        }

        /* res.json({message: "Login feito com sucesso!", status: 201}).status(201) */

        if (checarUsuario) {
            res.json({
                message: "Login feito com sucesso!",
                status: 201,
                id_usuario: checarUsuario.id_usuario,
                nome: checarUsuario.nome,
                sobrenome: checarUsuario.sobrenome,
                email: checarUsuario.email,
                funcao: checarUsuario.funcao,
                foto: checarUsuario.foto
            }).status(201)
        }
    }

    static async buscarUsuarioByEmail(req, res) {
        const data = req.body

        const checarUsuario = await Usuario.findOne({ where: { email: data.email } })

        if (!checarUsuario) {
            return res.json({ message: "Usuário não encontrado!", status: 500 }).status(500)
        } else {
            res.json({ checarUsuario: checarUsuario }).status(201)
        }

    }

    static async listarUsuario(req, res) {
        try {
            const usuario = await Usuario.findAll({
                where: { status_usuario: 1 },
              })
            return res.json(usuario).status(201)
        } catch (error) {
            return res.json(error).status(500)
        }
    }

    static async procurarUsuario(req, res) {
        const oId_usuario = req.params.id_usuario

        try {
            const usuario = await Usuario.findByPk(oId_usuario)
            return res.json(usuario)
        } catch (error) {
            return res.json(error).status(500)
        }
    }

    static async deletarUsuario(req, res) {
        const idUsuario = req.params.id
        const usuario = await Usuario.findByPk(idUsuario)

        try {
            if (usuario.status_usuario == true) {
                await Usuario.update({
                    status_usuario: false
                }, {
                    where: {
                        id_usuario: idUsuario
                    }
                })
            } else {
                await Usuario.update({
                    status_usuario: true
                }, {
                    where: {
                        id_usuario: idUsuario
                    }
                })
            }
            return res.json({ message: "Usuário apagado com sucesso!", status: 201 }).status(201)
        } catch (error) {
            return res.json(error).status(500)
        }
    }

    static async atualizarUsuario(req, res) {
        const idUsuario = req.params.id

        const data = req.body

        if (!data.data_admissao) {
            return res.json({ message: "Por favor, adicione uma data de admissão válida!", status: 500 }).status(500)
        }

        else if (!data.senha) {
            return res.json({ message: "Por favor, adicione uma senha!", status: 500 }).status(500)
        }

        else if (!data.funcao) {
            return res.json({ message: "Por favor, adicione uma função!", status: 500 }).status(500)
        }

        else if (!data.nome) {
            return res.json({ message: "Por favor, adicione um nome!", status: 500 }).status(500)
        }

        else if (!data.CPF) {
            return res.json({ message: "Por favor, adicione um CPF!", status: 500 }).status(500)
        }

        else if (!data.RG) {
            return res.json({ message: "Por favor, adicione um RG!", status: 500 }).status(500)
        }

        else if (!data.dataNascimento) {
            return res.json({ message: "Por favor, adicione a data de nascimento!", status: 500 }).status(500)
        }

        else if (!data.genero) {
            return res.json({ message: "Por favor, adicione o gênero!", status: 500 }).status(500)
        }

        else if (!data.telefone) {
            return res.json({ message: "Por favor, adicione um telefone!", status: 500 }).status(500)
        }

        else if (!data.celular) {
            return res.json({ message: "Por favor, adicione um numero de celular valido!", status: 500 }).status(500)
        }

        else if (!data.email) {
            return res.json({ message: "Por favor, adicione um e-mail válido!", status: 500 }).status(500)
        }

        else if (!data.cep) {
            return res.json({ message: "Por favor, adicione um cep valido!", status: 500 }).status(500)
        }

        else if (!data.endereco) {
            return res.json({ message: "Por favor, adicione um endereço!", status: 500 }).status(500)
        }

        else if (!data.numero) {
            return res.json({ message: "Por favor, adicione um numero!", status: 500 }).status(500)
        }

        else if (!data.bairro) {
            return res.json({ message: "Por favor, adicione um bairro!", status: 500 }).status(500)
        }

        else if (!data.cidade) {
            return res.json({ message: "Por favor, adicione uma cidade!", status: 500 }).status(500)
        }

        else if (!data.estado) {
            return res.json({ message: "Por favor, adicione uma cidade!", status: 500 }).status(500)
        }

        const salt = bcrypt.genSaltSync(10)
        const hashedSenha = bcrypt.hashSync(data.senha, salt)

        try {
            await Usuario.update({
                data_admissao: data.data_admissao,
                senha: hashedSenha,
                funcao: data.funcao,
                nome: data.nome,
                CPF: data.CPF,
                RG: data.RG,
                dataNascimento: data.dataNascimento,
                genero: data.genero,
                telefone: data.telefone,
                celular: data.celular,
                email: data.email,
                cep: data.cep,
                endereco: data.endereco,
                numero: data.numero,
                complemento: data.complemento,
                bairro: data.bairro,
                cidade: data.cidade,
                estado: data.estado,
                foto: data.foto

            }, {
                where: {
                    id_usuario: idUsuario
                }
            })
            return res.json({ message: "Usuário atualizado com sucesso!" }).status(200)
        } catch (error) {
            console.log(error)
            return res.json({ message: "Erro!!", error }).status(500)
        }
    }

    static async alterarStatusUsuario(req, res) {
        const oId_usuario = req.params.id_usuario

        console.log(oId_usuario)

        const usuario = await Usuario.findByPk(oId_usuario)


        try {
            if (usuario.status_usuario == true) {
                await Usuario.update({
                    status_usuario: false
                }, {
                    where: {
                        id_usuario: oId_usuario
                    }
                })
            } else {
                await Usuario.update({
                    status_usuario: true
                }, {
                    where: {
                        id_usuario: oId_usuario
                    }
                })
            }
            return res.json({ message: "Status do usuário alterado com sucesso!", status: 201 }).status(201)
        } catch (error) {
            return res.json(error).status(500)
        }
    }

}