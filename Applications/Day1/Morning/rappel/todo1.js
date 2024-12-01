/*
Exercice 1 : Simple 
Créer une fonction add et l'assigner à une variable sumFunction.
*/




/*
Exercice 2 : Intermédiaire
Créer une fonction applyOperation(a, b, operation) 
et tester avec une fonction multiply.
*/

// Fonction qui applique une opération sur deux nombres


// Fonction de multiplication
function multiply(x, y) {
    return x * y;
}

// Utilisation de la fonction


/*
Exercice 3 : avancé
Créer une fonction powerFunction(exponent) 
qui retourne une nouvelle fonction.
*/

// Fonction qui retourne une autre fonction pour 
// calculer une puissance


// Création de fonctions spécifiques
const square = "code here " // Carré
const cube = "code ehre"   // Cube

// Test des fonctions retournées
console.log(square(5)); // Output: 25
console.log(cube(2));   // Output: 8


/*
Exercice :
Créer un tableau operations contenant plusieurs fonctions 
et une fonction executeAll.

*/

// Création des fonctions d'opérations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

// Stocker les fonctions dans un tableau "operations"


// Fonction pour exécuter toutes les opérations du tableau


// Test de la fonction
const results = executeAll(operations, 6, 3);
console.log(results); // Output: [9, 3, 18]
