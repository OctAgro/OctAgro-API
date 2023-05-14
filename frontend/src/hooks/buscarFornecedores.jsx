import api from '../utils/api';

export async function buscarFornecedores(){
    try{
        const resposta = await api.get('/administrador/fornecedores/home');
        return resposta.data;
    } catch(erro){
        console.log(erro);
    }
}