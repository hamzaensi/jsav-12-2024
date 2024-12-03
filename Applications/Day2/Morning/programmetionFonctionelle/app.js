
// 1. Fonction déclarée 


function nomDeLaFonction(param1, param2) {
    return param1 + param2;
}

//Exemple : 

console.log(add(2, 3)); // 5 (hoisting)

function add(a, b) {
    return a + b;
}


//2. Fonction exprimée (Function Expression)

const nomDeLaVariable2 = function (param1, param2) {
    return param1 + param2;
};

//Exemple : 

const multiplier = function (a, b) {
    return a * b;
};

console.log(multiplier(4, 5)); // 20



//3. Fonction fléchée (Arrow Function) ES6


const nomDeLaVariable = (param1, param2) => param1 + param2;

// exemple 
const soustraire = (a, b) => a - b;
console.log(soustraire(10, 3)); // 7


//4. Fonction anonyme // callback

setTimeout(function () {
    console.log("Je suis une fonction anonyme !");
}, 1000);


callback ?



    //5. Fonction constructeur (Constructor Function)

    function Personne(nom, age) {
        this.nom = nom;
        this.age = age;
    }

const personne1 = new Personne("Alice", 25);
console.log(personne1.nom); // Alice


//6. Fonction asynchrone (Async Function)


async function nomDeLaFonction() {
    const resultat = await unePromesse();
    console.log(resultat);
}

// Exemple

async function fetchData() {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
}

fetchData();

//7. Fonction immédiatement invoquée(IIFE)


(function () {
    console.log("IIFE exécutée immédiatement !");
})();



/**** TODO1
 *
 * */

//  ******* La redéfinition ************

// Redéfinir une méthode d'un objet


// Redéfinir une fonction globale


// Redéfinir une méthode native , push ,


// Étendre un prototype


// E. Redéfinir une classe ou son comportement : ES6


/**** TODO2
 *
 * */

//******** surcharge ? ***********

// Exemples de surcharge simulée avec arguments

//Gérer un nombre variable d'arguments

//Comportement en fonction du type ou du nombre d'arguments


// Mélange d'arguments de différents types


// Alternatives modernes : Paramètres par défaut et Rest


/**** TODO3
 *
 * */


// closure ?

/**** TODO4
 *
 * */




