//link do desafio: https://www.hackerrank.com/contests/psel-ifood-b2bt03/challenges/sinuca-brasileira

//resolução

const jogadorA = [1, 2, 3, 4, 5, 6];

let soma = 0;

for (let item of jogadorA) {
	soma += item; 	
}

if (soma == 60) {
	console.log("EMPATE");
} else if (soma <= 60) {
	console.log("JOGADOR B GANHOU") 
} else {
	console.log("JOGADOR A GANHOU")
}