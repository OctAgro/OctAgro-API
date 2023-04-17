const Usuario = require('../models/Usuario')

const bcrypt = require('bcryptjs')

module.exports = class UsuarioControllers {
    // static loginUsuario(req, res) {
    //     res.render('usuario/loginUsuario')
    // }

    // static registrarUsuario(req,res) {
    //     res.render('usuario/registroUsuario')
    // }

    static async registrarUsuarioPost(req, res) {
        const {nome, email, senha, confirmarSenha, funcao, dataAdmissao, CPF, RG, dataNascimento, genero} = req.body

        if (!nome) {
            return res.json({message: "Por favor, adicione um nome!", status: 500}).status(500)
        }

        else if (!email) {
            return res.json({message: "Por favor, adicione um e-mail válido!", status: 500}).status(500)
        }

        else if (!senha) {
            return res.json({message: "Por favor, adicione uma senha!", status: 500}).status(500)
        }

        else if (!funcao) {
            return res.json({message: "Por favor, adicione uma função!", status: 500}).status(500)
        }

        else if (!dataAdmissao) {
            return res.json({message: "Por favor, adicione uma data de admissão!", status: 500}).status(500)
        }

        else if (!CPF) {
            return res.json({message: "Por favor, adicione um CPF!", status: 500}).status(500)
        }

        else if (!RG) {
            return res.json({message: "Por favor, adicione um RG!", status: 500}).status(500)
        }

        else if (!dataNascimento) {
            return res.json({message: "Por favor, adicione a data de nacimento!", status: 500}).status(500)
        }

        else if (!genero) {
            return res.json({message: "Por favor, adicione o gênero!", status: 500}).status(500)
        }

        //checagem se a senha é a mesma de confirmar senha
        if (senha != confirmarSenha) {
            //mensagem
            return res.json({message: "As senhas não conferem, tente novamente!", status: 500}).status(500)
            //res.render('/usuario/registrarUsuario')

        }

        //checar se usuário existe
        const checarSeUsuarioExiste = await Usuario.findOne({
            where: {email: email}
        })

        const checarSeCPFExiste = await Usuario.findOne({
            where: {CPF: CPF}
        })

        const checarSeRGExiste = await Usuario.findOne({
            where: {RG: RG}
        })
        
        //checagem se existe dados repetidos
        if ( checarSeUsuarioExiste ) {
            return res.json({message: "O e-mail já está cadastrado!", status: 500}).status(500)
        } else if ( checarSeCPFExiste ){
            return res.json({message: "O CPF já está cadastrado!", status: 500}).status(500)
        } else if (checarSeRGExiste) {
            return res.json({message: "O RG já está cadastrado!", status: 500}).status(500)
        }

        const salt = bcrypt.genSaltSync(10)
        const hashedSenha = bcrypt.hashSync(senha, salt)

        const usuario = {
            nome,
            email,
            senha: hashedSenha,
            funcao,
            dataAdmissao,
            CPF,
            RG,
            dataNascimento,
            genero
        }

        try {
            await Usuario.create(usuario)
            // req.json('message', 'Cadastro realizado com sucesso!')
            return res.json({message: "Sucesso ao criar usuário!", status: 201}).status(201)
            //res.redirect('/')
        } catch (error) {
            return res.json(error).status(500)
        }
    }

    //função de logar
    static async loginPost(req, res) {
        const {email, senha} = req.body

        if (!email) {
            return res.json({message: "Por favor, digite seu e-mail!", status: 500}).status(500)
        }

        else if (!senha) {
            return res.json({message: "Por favor, digite sua senha!", status: 500}).status(500)
        }

        //checar se usuário existe
        const checarUsuario = await Usuario.findOne({where: {email: email}})

        if (!checarUsuario) {
            return res.json({message: "Usuário não encontrado!", status: 500}).status(500)
        }

        const checarSenha = bcrypt.compareSync(senha, checarUsuario.senha)

        if (!checarSenha) {
            return res.json({message: "A senha digitada está inválida!", status: 500}).status(500)
        }

        res.json({message: "Login feito com sucesso!", status: 201}).status(201)

    }

}