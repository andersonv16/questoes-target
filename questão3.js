  
  /*
  3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média
*/

const data = require("./dados.json")

let menorValor = Infinity;
let maiorValor = -Infinity;
let total = 0;
let diasComFaturamento = 0;

data.forEach(dia => {
  if (dia.valor === 0) return; // ignorar dias sem faturamento

  menorValor = Math.min(menorValor, dia.valor);
  maiorValor = Math.max(maiorValor, dia.valor);
  total += dia.valor;
  diasComFaturamento++;
});

const media = total / diasComFaturamento;

let diasAcimaDaMedia = 0;

data.forEach(dia => {
  if (dia.valor === 0) return; // ignorar dias sem faturamento

  if (dia.valor > media) diasAcimaDaMedia++;
});
console.log("Questão 3:");
console.log("Menor valor de faturamento: R$", menorValor.toFixed(2));
console.log("Maior valor de faturamento: R$", maiorValor.toFixed(2));
console.log("Dias acima da média mensal: ", diasAcimaDaMedia);
