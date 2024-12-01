/*
Exercice 1 : Conflit d’asynchronisme
Le script suivant télécharge des données à partir d'une API, mais les résultats ne s'affichent pas correctement. Identifiez et corrigez le problème.

*/


async function fetchData() {
  let data;
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((result) => {
      data = result;
    });
  console.log(data.title); // Affiche 'undefined'
}
fetchData();


/*

Exercice 2 : Hoisting et redéclaration
Analysez le comportement du code suivant 
et expliquez pourquoi il génère une erreur 
ou affiche un résultat inattendu. Corrigez le code.
*/

function testHoisting() {
  console.log(message); // Que s'affiche-t-il ici ?
  if (true) {
    let message = 'Bonjour, JS !';
  }
}
testHoisting();


/*
Exercice 3 : Manipulation incorrecte d’objets
Un programmeur souhaite copier un objet, 
mais le comportement du script montre une modification 
inattendue de l'objet initial. 
Trouvez l'erreur et proposez une solution.
*/

const original = { name: 'Alice', age: 25 };
const copy = original;

copy.age = 30;

console.log(original.age); // Affiche 30 au lieu de 25


/*
Exercice 4 : Problème de fermeture (Closure)
Ce script utilise une boucle pour créer plusieurs boutons,
mais tous les boutons affichent le même numéro lorsqu’ils sont cliqués.
Corrigez ce comportement.

*/

for (var i = 0; i < 5; i++) {
  document.getElementById('button' + i).addEventListener('click', function () {
    console.log('Button index:', i);
  });
}


/*
Exercice 5 : Contexte this incorrect
Dans le script suivant, une méthode utilise this, 
mais le résultat affiché n’est pas celui attendu. Corrigez l'erreur.
*/

const user = {
  name: 'Bob',
  printName: function () {
    console.log('User:', this.name);
  },
};

const btn = document.getElementById('myButton');
btn.addEventListener('click', user.printName); // Affiche 'User: undefined'


