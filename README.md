
# Anotacoes

Anotações de aulas

# COMANDOS GIT MAIS USADOS:
```

Adiciona arquivos a serem commitados:
git add seu_arquivo.js

Commita os arquivos adicionados com add passando uma mensagem de commit:
git commit -m "prefix: Criando exercicio X"

"Empurra os commits para a branche na nuvem:"
git push origin "feature/minha_branche"


Outros comandos:

Atualiza a branche local com os dados da branche da nuvem:

git pull


Troca de branche:
git checkout minha_branche

Cria uma nova branche troca para ela:
git checkout -b "feature/minha_nova_branche"

- git gui faz o mesmo processo de add, commit e push
```
---

## COMO INICIAR:

```
git clone repo
cria a pastinha dentro da pasta 
do repo pra colocar os txts 
dentro da pasta nova adiciona seus txts 
git gui
clica no íconezinho de cada arquivo na lista de cima pra fazer o add no commit 
escreve a msg de commit SEM CLICAR EM COMMIT 
no topo esquerdo vê se vc tá na branch certinho
estando ok clica em commit 
clica em push 
No GitHub cria o pull request e aprova
```

---

// console log é usado pra exibir algo na tela do pc!

/* Esse é um comentario
 * de multiplas
linhas
 */
 
tentar NÃO comentar comentarios obvios

---

/* Um bloco é definido com "{" simbolo de chaves, uma maneira pra agrupar 
sentença de codigo.

pode-se usar mais de um bloco, um dentro do ouutro, exemplo:
*/
```js
{
     console.log('buenos dias');
     console.log('buenos tarde');
     console.log('buenos notches')
  { 
     console.log('Olá')
     console.log('Oiii')
    }
  }

  /* é possível criar um bloco de codigo, com sentenças vazias, 
  como exemplo abaixo:
  */

  {
    ;
    ;
    ;
  }

/* Os codigos são organizados através de Pastas, arquivos (js é do java script).
sentenças de codigos e blocos. 
*/
```

---

#AULAS de Dados: 

```

Para criar uma variavel digitamos "var", e variavel é pra armazenar uma informação.
"let" também é uma definição para variavel

exemplo abaixo:

```
---
---

```js

var nome = "Caneta";
var quantidade = 10;
var preco = 6.4;
var imposto = 1.5;
var precoFinal = preco + imposto;

console.log("Caneta");
console.log(quantidade);
console.log(preco);
console.log(imposto);
console.log(precoFinal);
nome = "Caneta Bic"
console.log(nome);

```
---
---

```js

exemplo de utilização de let:

 let preco = 19.90;
 let desconto = 0.4;

 console.log(19.9 * 0.6);
 console.log(preco * (1   - desconto));

 let precoComDesconto = preco * (1 - desconto);
 console.log(precoComDesconto);

ou então:

let nome = "Caderno"; // String (texto) -> sequencia de simbolos ou letras
let categoria = "Papelaria";
console.log(nome + categoria); //Ele irá concatenar as duas palavras, se não quiser que fique tudo junto, é só dar espaço no final de uma das palavras.
console.log("Produto: " + nome
  +", Categoria: " + categoria
  +", Preço: " + preco
  +", Desconto: " + desconto);

```
---
---

```js
let idade = 31;
console.log(typeof 31);
console.log(typeof idade); // sempre que for trabalhar com valores inteiros, vamos estar trabalhando com o tipo "number"

let salario = 4578.32;
console.log(typeof salario);

let estaChovendo = false // ou true
console.log(typeof estaChovendo); // essa variavel vai ser do tipo: Boolean (verdadeiro ou falso).

console.log(typeof "Teste"); // tipo: string
```
----
----

 ```js

 let a = 3;

// ...

a = 10;
 
//...

console.log(a);

// podemos modificar uma variavel ao longo do codigo, e também podemos acrescentar algo na variavel, e então ficaria:

let a = 3;

// ...

a = a + 10;
 
//...

console.log(a);

// como conseguimos transformar uma variavel em um valor constante(que NÃO pode ser alterado!), para isso digitamos "const a = 3;"

const a = 3;

//assim significa que não podemos realizar alterações nela.
//DICA: Crie mais constantes do que variaveis.

```
---
---

```js
              //DESAFIO:
// PI * raio * raio

let raio = 10;
const PI = 3.14;
let Area =  PI * raio *raio;

console.log("O valor da área é " + Area + "m2.");
console.log(Math.PI);

```

---
---

```js

          // DESAFIO 2 (TROCA DE VALOR DA VARIAVEL):

let a = 7;
let b = 94;

b = 7;
a = 94;

console.log(a);
console.log (b);

// depois da troca.. a = 94 e b =7

// O EXEMPLO ABAIXO NÃO FUNCIONA, VAI FINALIZAR OS DOIS VALORES VÃO SER EXATAMENTE IGUAIS  

let a = 7;
let b = 94;

a = b;
b = a;

console.log(a);
console.log (b);
 ----

// PODEMOS CRIAR UMA VARIAVEL TEMPORARIA PARA ARMAZENAR O DADO PARA TROCARMOS O VALOR:

let a = 7;
let b = 94;

let temp = a;
a = b;
b = temp;

console.log(a);
console.log (b);

// Uma maneira mais facil em JS:

let a = 7;
let b = 94;

[a;b] = [b;a];

console.log(a);
console.log (b);

``` 
----
----












