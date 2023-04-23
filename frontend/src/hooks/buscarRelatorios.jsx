import api from '../utils/api';

export async function buscarRelatorios(){
    try{
        const resposta = await api.post('/aprovador/home');
        return resposta;
    } catch(erro){
        console.log(erro);
    }
}

export async function buscarRelatoriosAnalista() {
    try {
        const relatoriosAnalista = await api.get('/analista/home') 
        console.log(relatoriosAnalista)
        return relatoriosAnalista.data
    } catch (erro) { 
        console.log(erro) 
    }
}

export async function buscarRelatoriosRecebedor() {
    try{
        const relatoriosRecebedor = await api.get('/recebedor/home') 
        console.log(relatoriosRecebedor)
        return relatoriosRecebedor.data
    }catch (erro) {
        console.log(erro)
    }
}