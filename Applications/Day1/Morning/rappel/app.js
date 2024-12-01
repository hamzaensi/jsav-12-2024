

// Assigner une fonction à une variable
const greet = function (name) {
    return `Hello, ${name}`;
};

console.log(greet("Hamza")); // Output: Hello, Hamza

// Passer une fonction comme argument
function executeFunction(fn, value) {
    return fn(value);
}

console.log(executeFunction(greet, "Hamza")); // Output: Hello, Hamza

// Retourner une fonction depuis une autre fonction
function createMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
console.log(double(5)); // Output: 10



let number = 42;      // Nombre
let text = "Bonjour"; // Chaîne
let arr = [1, 2, 3];  // Tableau
let obj = { key: "value" }; // Objet
let func = () => "Hello!"; // Fonction

const obj1 = {
    sayHi: function () {
        return "Hi!";
    },
};

console.log(obj1.sayHi()); // Output: Hi!

const arr1 = [1, function () { return "Bonjour"; }];
console.log(arr[1]()); // Output: Bonjour

// Exemple avec `map`, qui est une fonction d'ordre supérieur
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6]





/* Scope  dans le TODO2*/

var globalVar = "Je suis global"; // Accessible partout

function afficher() {
    console.log(globalVar); // "Je suis global"
}

afficher();
console.log(globalVar); // "Je suis global"


/* Portée des fonctions (Function Scope) : */

function maFonction() {
    var localVar = "Je suis locale à cette fonction";
    console.log(localVar); // Fonctionne
}
maFonction();
console.log(localVar); // Erreur : non défini

/* Portée des blocs (Block Scope) :*/

{
    let blockVar = "Je suis bloquée ici";
    const blockConst = "Moi aussi";
    console.log(blockVar); // OK
}
console.log(blockVar); // Erreur : non défini

/* Portée lexicale (Lexical Scope) : */
function exterieur() {
    let exterieurVar = "Je viens de dehors";

    function interieur() {
        console.log(exterieurVar); // "Je viens de dehors"
    }

    return interieur;
}

const maFonction = exterieur();
maFonction();


/* Pour garantir qu'aucune variable globale n'est créée, on peut utiliser une IIFE. */


const gestionnaire = (function () {
    let compteur = 0;

    return {
        incrementer: function () {
            compteur++;
            if (compteur > 5) {
                compteur = 0; // Réinitialisation
            }
        },
        afficher: function () {
            console.log("Compteur :", compteur);
        },
    };
})();

gestionnaire.incrementer();
gestionnaire.afficher(); // Compteur : 1
console.log(gestionnaire.compteur); // undefined



/* Function VS Object */

function createCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2



const person = {
    firstName: "Justine",
    lastName: "Paris",
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },
};
console.log(person.getFullName()); // Justine Paris


/*
Pourquoi préférer des fonctions génératrices
d'objets au lieu d'écrire directement les objets ?
*/


function createUser(name, age) {
    return {
        name,
        age,
        greet() {
            return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
        },
    };
}

const user1 = createUser("Alice", 30);
const user2 = createUser("Bob", 25);

console.log(user1.greet()); // Hello, my name is Alice and I am 30 years old.
console.log(user2.greet()); // Hello, my name is Bob and I am 25 years old.



