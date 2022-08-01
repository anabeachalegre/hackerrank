//link do desafio: https://www.hackerrank.com/contests/psel-ifood-b2bt03/challenges/2-turno-de-uma-eleicao

//resolução

function solucao(quantidadeEleitores, votosPrimeiroColocado) {
    let totalVotosDoCanditado = (votosPrimeiroColocado/100) * quantidadeEleitores;
    let metadeDosVotos = (50/100) * quantidadeEleitores;
    
    if(quantidadeEleitores < 200000 || totalVotosDoCanditado > metadeDosVotos){
        console.log("NAO HAVERA SEGUNDO TURNO");
    }else{
        console.log("HAVERA SEGUNDO TURNO");
    }
}