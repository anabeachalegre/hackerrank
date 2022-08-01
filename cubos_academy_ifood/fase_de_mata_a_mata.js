//link do desafio: https://www.hackerrank.com/contests/psel-ifood-b2bt03/challenges/fase-de-mata-a-mata

//resolução

const somaGolsTimeB = golsTimeBDentro + golsTimeBFora;
const somaGolsTimeA = golsTimeADentro + golsTimeAFora;

if (somaGolsTimeB > somaGolsTimeA || (somaGolsTimeB = somaGolsTimeA && golsTimeBFora> golsTimeAFora))
    console.log("TIME A ELIMINADO"); 
} else if (somaGolsTimeA > somaGolsTimeB || (somaGolsTimeB = somaGolsTimeA && golsTimeAFora > golsTimeBFora)) {
    console.log("TIME B ELIMINADO"); 
} else 
    console.log("PRORROGACAO"); 
}