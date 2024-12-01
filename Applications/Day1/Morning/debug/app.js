/**
 * Exercice 1 :
 */


/* // Affichage d'une alerte

(alert('Hello)) */



/**
 * Exercice 2 : use debugger , breakpoint
 */

/* //  Calculatrice simple
function add(a, b) {

    return a + b; // Erreur intentionnelle
}
console.log(add(5, 3)); // Devrait afficher 8

 */

/**
 * Exercice 3 : use console
 */


/* // Manipulation DOM


document.getElementById('missingId').innerText = 'Hello World';
 */



/**
 * Exercice 4 : use breakPoint
 */



/* // Gestion des événements

var btn = document.querySelector('#myButton');
btn.onclick = function () { // Erreur: onClick (au lieu de onclick)
    alert('Clicked!');
}; */


/**
 * Exercice 5 : use Console + Network
 */

/* // Appel API
// use console et network : cors problem
fetch('http://localhost:3000/api/v2/tasks')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
 */


/**
 * Exercice 6 : use Console
 */

/* // Timer avec setTimeout

setTimeout(() => console.log('Hello!'), '3000'); // Erreur: '3000' est une chaîne

 */


/**
 * Exercice 7 : use Console
 */

//To-Do List dynamique
// Objectif : Identifier pourquoi une tâche ajoutée n’apparaît pas dans la liste.

/* function addTask(task) {

    let ul = document.getElementById('taskList');
    let li = document.createElement('li');
    li.innerHTML = task;
    console.log(li)
    ul.innerHTML(li); // Erreur: innerHtml au lieu de appendChild
    console.log(ul)
} */

/**
 * Exercice 8 : use Console
 */



//Objectif : Détecter une erreur dans une méthode d’une classe.

//Description : Une classe enfant doit hériter d’une méthode de la classe parent,
// mais l’héritage ne fonctionne pas.

/* class Animal {
    speak() {
        console.log('Animal speaks');
    }
}
class Dog extends Animal {
    speak() {
        super.speaks(); // Erreur: méthode incorrecte
    }
}
const dog = new Dog();
dog.speak(); */


// on revient ici à la fin de Day 3
/**
 * Exercice 9 : use Console + Network
 */

// Application de Chat avec WebSocket
// Objectif : Identifier une erreur de connexion au serveur.


