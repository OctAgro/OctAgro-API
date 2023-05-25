import api from '../utils/api';

export async function buscarUsuarioPorEmail(email){
    try{
        const resposta = await api.post('/usuario/buscar-usuario', {email: email});
        return resposta;
    } catch(erro){
        console.log(erro);
    }
}

export async function buscarTodosUsuarios(){
    try{
        const todosUsuarios = await api.get('/usuario/listar')
        return todosUsuarios.data


    }catch(erro){
        console.log(erro);
    }
}