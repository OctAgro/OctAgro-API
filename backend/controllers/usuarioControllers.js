const Usuario = require('../models/usuario')

const bcrypt = require('bcryptjs')

module.exports = class UsuarioControllers {
    // static loginUsuario(req, res) {
    //     res.render('usuario/loginUsuario')
    // }

    // static registrarUsuario(req,res) {
    //     res.render('usuario/registroUsuario')
    // }

    static async registrarUsuarioPost(req, res) {
        const {nome, email, senha, confirmarsenha, funcao, dataAdmissao, CPF, RG, dataNascimento, genero} = req.body

        if (senha != confirmarsenha) {
            //mensagem
            req.flash('message', 'As senhas não conferem, tente novamente!')
            //res.render('/usuario/registrarUsuario')

            return
        }

        //checar se usuário existe
        const checarSeUsuarioExiste = await Usuario.findOne({
            where: {email: email}
        })
        
        if ( checarSeUsuarioExiste ) {
            //mensagem
            req.flash('message', 'O e-mail já está cadastrado!')
            //res.render('/usuario/registrarUsuario')

            return
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
            req.flash('message', 'Cadastro realizado com sucesso!')
            //res.redirect('/')
        } catch (error) {
            return res.json(error).status(500)
        }
    }
}