import api from '../utils/api';

export async function buscarRelatorios(){
    try{
        const resposta = await api.post('/aprovador/home');
        return resposta;
    } catch(erro){
        console.log(erro);
    }
}

export async function buscarRelatoriosRecebedor() {
    try{
        const relatoriosRecebedor = await api.get('/recebedor/home') 
        console.log(relatoriosRecebedor)
        return relatoriosRecebedor
    }catch (erro) {
        console.log(erro)
    }
}

export async function buscarRelatoriosAnalista() {
    try {
        const relatoriosAnalista = await api.get('/analista/home') 
        console.log(relatoriosAnalista)
        return relatoriosAnalista
    } catch (erro) { 
        console.log(erro) 
    }
}

export async function buscarRelatoriosAprovador() {
    try{
        const relatoriosAprovador = await api.get('/aprovador/home') 
        console.log(relatoriosAprovador)
        return relatoriosAprovador
    }catch (erro) {
        console.log(erro)
    }
}