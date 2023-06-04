import api from '../utils/api';

export async function criarUsuario(data){
    try{
        console.log('No hook', data)
        const dados = await api.post('/administrador/usuarios/cadastrar', data);
        return dados.data;
    } catch(erro){
        const msgErro = erro.response.data.message;
        console.log(erro);
    }
}

export async function enviarFoto(foto){
    try{
        console.log('Enviando foto', foto)
        const dados = await api.post('/administrador/usuarios/cadastrar', foto);
        return dados;
    } catch(erro){
        const msgErro = erro.response.data.message;
        console.log(erro);
    }
}