/*
5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;
*/

let str = "Palavra"
let resultado = "";

for (let i = str.length - 1; i >= 0; i--) {
    resultado += str[i];
  }
  console.log("Questão 5:");
  console.log(resultado)