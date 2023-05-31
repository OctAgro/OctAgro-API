import api from '../utils/api';

export async function criarCriterio(data){
    try{
        console.log('No hook', data)
        const dados = await api.post('/administrador/criterio/criar', data);
        console.log('No hook dps da Rota:', dados)
        return dados.data;
    } catch(erro){
        const msgErro = erro;
        console.log(erro);
    }
}