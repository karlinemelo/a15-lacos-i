/* Utilizando o laço `while`, escreva um código que recebe um `prompt` perguntando se a pessoa deseja comer mais coxinhas. “S” deve representar “sim”, e “N” deve representar “não”. Crie também uma `let conta` para guardar o valor total.

Toda vez que a resposta for **sim**, o laço deve se repetir, e devemos adicionar R$2.50 ao valor total. Quando a resposta não for **sim**, devemos imprimir o valor total da conta. */

let comerCoxinha = prompt("Quer comer mais coxinhas? [S/N]"); // Esse prompt vem no inicio para comecar perguntando
let precoCoxinha = 0; // 0 pq comeca assumindo que ninguem comprou nada ainda
let qtdadeCoxinhas = 0; // 0 pq nao comprou nada ainda
let precoProduto = 2.5; //criei essa variavel para ficar mais facil de alterar o valor do produto no futuro.

while (comerCoxinha.toUpperCase() === "S") {
  comerCoxinha = prompt("Quer comer mais coxinhas? [S/N]");
  precoCoxinha += precoProduto;
  qtdadeCoxinhas += 1;
}

console.log(
  "O seu valor é",
  precoCoxinha,
  "Voce comeu",
  qtdadeCoxinhas,
  "coxinhas."
);
