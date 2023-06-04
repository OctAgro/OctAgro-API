import api from '../utils/api';

export async function buscarUsuarios(){
    try{
        const resposta = await api.get('/usuario/listar');
        return resposta.data;
    } catch(erro){
        console.log(erro);
    }
}

export async function procurarUsuarioPorId(id){
    try{
        const resposta = await api.get(`/usuario/listar/${id}`);
        return resposta.data;
    } catch(erro){
        console.log(erro);
    }
}