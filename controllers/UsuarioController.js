const Usuario = require('../models/Usuario')

module.exports = class UsuarioController {
    static async login(req,res){
        //Simulando o body de uma pagina web do tipo formulario que cadastra um usuario
        const { nome, cpf, funcao, senha, confirmacaoSenha } = req.body

        const listaErros = []

        //Verificando se os campos acima estão corrtamente preechidos
        if (!nome){
            listaErros.push("O campo nome é obrigatório!")
        }
        if (!cpf){
            listaErros.push("O campo cpf é obrigatório!")
        }
        if (!funcao){
            listaErros.push("O campo funcao é obrigatório!")
        }
        if (!senha){
            listaErros.push("O campo senha é obrigatório!")
        }
        if (!confirmacaoSenha){
            listaErros.push("O campo confirmação de senha é obrigatório!")
        }
        if (senha != confirmacaoSenha){
            listaErros.push("A senha e sua confirmação precisam ser iguais!")
        }

        if (listaErros.length > 0){
            res.status(422).json({message: listaErros})
        }

        //Verificando se o usuário já está previamente cadastrado no sistema
        const usuarioExiste = await Usuario.findOne({uso_cpf: cpf})

        if (usuarioExiste){
            res.status(422).json({message: "Usuário já cadastrado no sistema!"})
            return
        }

    }
}