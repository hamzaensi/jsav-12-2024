/* 
Exercice 1 : Identifier les prototypes

*/

function Animal(name) {
    this.name = name;
}

Animal.prototype.sound = function () {
    console.log(`${this.name} makes a sound.`);
};

const dog = new Animal("Buddy");

console.log(dog.__proto__ === Animal.prototype); // ?
console.log(Animal.prototype.__proto__ === Object.prototype); // ?
console.log(Object.prototype.__proto__); // ?


/* 
Solution :

dog.__proto__ === Animal.prototype : true.
Animal.prototype.__proto__ === Object.prototype : true.
Object.prototype.__proto__ : null.

*/


/*
Exercice 2 : Comprendre la chaîne de prototypes

*/
const obj = { a: 1 };
Object.setPrototypeOf(obj, { b: 2 });
console.log(obj.a); // ?
console.log(obj.b); // ?
console.log(obj.c); // ?


/*
Solution :

obj.a : 1 (propriété directe).
obj.b : 2 (trouvée dans le prototype).
obj.c : undefined (pas trouvé dans la chaîne).
*/

/*
Exercice 3 : Créer des objets avec Object.create
Créez un objet car qui hérite d’un prototype contenant une méthode start().
*/

const vehiclePrototype = {
    start: function () {
        console.log("Vehicle is starting...");
    },
};

const car = Object.create(vehiclePrototype);
car.start(); // Vehicle is starting...
