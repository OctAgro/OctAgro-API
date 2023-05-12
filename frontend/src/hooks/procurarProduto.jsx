import api from '../utils/api';

export async function procurarProduto(id){
    try{
        const resposta = await api.post(`/administrador/produtos/procurar/${id}`);
        return resposta;
    } catch(erro){
        console.log(erro);
    }
}

