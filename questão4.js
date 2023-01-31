/*
4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.
*/
console.log("Questão 4:");
let faturamentoMensal = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
  };
  
  let total = 0;
  for (let estado in faturamentoMensal) {
    total += faturamentoMensal[estado];
  }
  
  for (let estado in faturamentoMensal) {
    let percentual = (faturamentoMensal[estado] / total) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
  }
  