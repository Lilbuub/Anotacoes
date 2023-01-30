/* Exercício 0: Defina as diferenças entre VAR, LET e CONST com uma frase curta
 * para cada*/
/* VAR e LET = ambas são variaveis que armazenam dados, porém o VAR ao atribuir um valor e depois mudar esse valor é possível, já com let não é possível.. você teria que digitar novamente let e atribuir a outro valor desejavel.
 * CONST = Uma variavel constante que não pode ser alterada*/
/* Exercício 1: Crie uma variável com o nome "nome" utilizando a palavra-chave
 * VAR e atribua seu nome completo como valor. Em seguida, imprima a variável 
 * na tela.*/
var nome= "thais"
console.log(nome);
/* Exercício 3: Crie uma constante com o nome "idade" utilizando a 
 * palavra-chave CONST e atribua seu valor de idade. Em seguida, 
 * tente alterar o valor da constante e imprima a constante na tela.*/
const idade= 26
console.log(idade); //não dá para alterar uma constante.
/* Tipagem Fraca 
 * Exercício 0: Dê um exemplo de como a tipagem fraca afeta a programação 
 * em JavaScript*/
/* RESP: Nomeclatura das variaveis, comentários desnecessários que fazem 
 * poluição do código, realizar boas praticas*/
// Exercício 0: Crie uma variável com o tipo Number e atribua um valor a ela
number = 45;
console.log(number);
/* Exercício 1: Crie uma variável com o nome "idade" e atribua um valor 
 * numérico. Em seguida, altere o valor da variável para uma string e imprima
 * a variável na tela.*/
var idade2= 26;
console.log(idade2);
idade2= "Minha idade é 26";
console.log(idade2);
/* Exercício 2: Crie uma variável com o nome "nome" e atribua uma string
 * como valor. Em seguida, altere o valor da variável para um número e imprima 
 * a variável na tela.*/
var nome2= "Thais";
console.log(nome2);
var nome2= 26;
console.log(nome2);