/* Exercice 1 : Comprendre le comportement des variables avec var, let, et const

*/
/*
Questions :

Quel est le résultat de chaque console.log ?
Expliquez pourquoi chaque résultat apparaît.

*/

console.log(a); // ?
var a = 10;

console.log(b); // ?
let b = 20;

console.log(c); // ?
const c = 30;





/* 
Exercice 2 : Fonctions et variables combinées

*/
/*
Questions :

Quel est le résultat de chaque console.log et de
l'appel à sayHello ?
Expliquez comment JavaScript réorganise ce code.

*/

sayHello();
console.log(message); // ?
var message = "Hello, World!";
function sayHello() {
  console.log("Bonjour !");
}






/*

Exercice 3 : Hoisting avec une fonction anonyme et des var

*/
/* 
Questions :

Que se passe-t-il lors de l'exécution de test() ?
Que contient console.log(test) après l'appel à test() ?
*/

test();

var test = function () {
  console.log("Test fonction anonyme !");
};

console.log(test);










