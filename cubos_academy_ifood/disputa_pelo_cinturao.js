//link do desafio: https://www.hackerrank.com/contests/psel-ifood-b2bt03/challenges/informacoes-do-lutador

//resolução

function solucao(cartel) {

    let numeroDeVitorias = 0;
    let numeroDeDerrotas = 0;
    let numeroDeEmpates = 0;

    for (let item of cartel) { 
        if (item === "V") { 
            numeroDeVitorias += 1; 
        } else if (item === "D") { 
            numeroDeDerrotas += 1;
        } else {
            numeroDeEmpates += 1;
        }
    }

    let quantidadeDeLutas = numeroDeVitorias + numeroDeDerrotas + numeroDeEmpates;

    const aproveitamento = ((numeroDeVitorias - numeroDeDerrotas) / quantidadeDeLutas) * 100;


    if (quantidadeDeLutas >= 10 && aproveitamento >= 50) {
        console.log("MERECE DISPUTAR");
    } else { 
        console.log("NAO MERECE DISPUTAR")
    }
}