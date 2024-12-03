/****
 * Typage faible

 */


// Selon vous, que va afficher le code suivant ? 
console.log("5" - 2); // ?

// Coercition Implicite

console.log("5" + 2); // "52" (concaténation, car "+" favorise les strings)
console.log("5" - 2); // 3 (soustraction, car "-" favorise les nombres)
console.log(true + 1); // 2 (true est converti en 1)
console.log([] + {});  // "[object Object]"
console.log({} + []);  // 0 (à cause de la priorité syntaxique)


//  Comparaisons avec == vs ===


console.log(5 == "5"); // true (coercition implicite)
console.log(5 === "5"); // false (pas de coercition)
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log([] == false); // true

/*
Valeurs "False"
Liste des valeurs évaluées comme false dans un contexte boolean :
*/
// 0, "", null, undefined, NaN, et false.

// Exemple 

if ("") console.log("Empty string is truthy"); // Ne s'exécute pas
if ([]) console.log("Empty array is truthy"); // S'exécute


// Pourquoi le Typage Faible peut Causer des Bugs ?



/****
 * Hoisting

 */

//Hoisting des variables déclarées avec var

console.log(x); // undefin
var x = 5;
console.log(x); // 5

// Hoisting des fonctions

greet(); // Bonjour !
function greet() {
    console.log("Bonjour !");
}


//let et const : la "zone temporaire morte"

console.log(y); //

let y = 10;
const z = 10;



// Pièges avec var

function test() {
    console.log(a); // ?
    var a = 3;
    console.log(a); // ?
}
test();

/*
Résultat:

undefined
3

*/


// Problème avec des fonctions

foo();
var foo = function () {
    console.log("Test !");
};

/*
Resultat :

TypeError: foo is not a function
*/


// Pourquoi utiliser let et const au lieu de var ?




/****
 * Changement de contexte

 */

//Exemple simple :

const obj = {
    name: "Alice",
    getName: function () {
        return this.name;
    },
};
console.log(obj.getName()); // Alice

// Contexte global (ou strict mode)
nodeJS
console.log(this); // ? Navigateur , 



const car = {
    brand: "Toyota",
    getBrand: function () {
        return this.brand;
    },
};
console.log(car.getBrand()); // Toyota



// Perte de contexte


const car1 = {
    brand: "Toyota",
    getBrand: function () {
        return this.brand;
    },
};

const brand = car1.getBrand;
console.log(brand()); // ?


/*
Utilisation de bind, call, et apply
bind :

Fixe le contexte de this pour une fonction donnée.
*/


const car2 = {
    brand: "Toyota",
    getBrand: function () {
        return this.brand;
    },
};

const brand2 = car2.getBrand.bind(car);
console.log(brand()); // Toyota


// call et apply :

const car4 = {
    brand: "Toyota",
};

function showBrand(country) {
    return `${this.brand} from ${country}`;
}

console.log(showBrand.call(car4, "Japan")); // Toyota from Japan
console.log(showBrand.apply(car4, ["Japan"])); // Toyota from Japan


//Fonctions fléchées et contexte lexical


const car5 = {
    brand: "Toyota",
    getBrand: () => {
        return this.brand;
    },
};

console.log(car5.getBrand()); // ?


