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
Exercice 2 : Comprendre la chaîne de prototypes

*/
const obj = { a: 1 };
Object.setPrototypeOf(obj, { b: 2 });
console.log(obj.a); // ?
console.log(obj.b); // ?
console.log(obj.c); // ?



/*
Exercice 3 : Créer des objets avec Object.create
Créez un objet car qui hérite d’un prototype contenant une méthode start().
*/

const vehiclePrototype = {
    start: function () {
        console.log("Vehicle is starting...");
    },
};


