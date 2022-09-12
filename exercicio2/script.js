/* Crie um programa que peça um input de número para o usuário. Com este número, o código deve imprimir a **tabuada** do número, de 1 a 10.

Exemplo com entrada **`7`**:
```jsx
7
14
21
28
35
42
49
56
63
70
```

*/
const tabuada = 8;

for (let i = 1; i <= 10; i++) {
  // i<=10 vai repetir 10 vezes
  // O i é o índice. Vai repetir de 1 em 1. Se colocar i-- vai fazer contagem regressiva
  // O i++ é o que controla o qto vai ser adicionado. O i++ adiciona 1 ao loop.
  console.log(`${i} * ${tabuada} = ${i * tabuada}`); // toda vez que o loop rodar, vai ser adicionado +1 no i. Na primeira rodada i = 1, na segunda rodada i = 2, na terceira rodada i = 3.
}
