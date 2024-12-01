/*
Exercice 1 : Comparer deux méthodes
Créez un objet car avec une méthode start en utilisant :

Un littéral d'objet.
Une classe ES6.

*/

// Avec un littéral d'objet :

const car = {
    brand: "Toyota",
    start: function () {
        console.log(`${this.brand} is starting...`);
    },
};
car.start(); // Toyota is starting...


// Avec une classe ES6 :

class Car {
    constructor(brand) {
        this.brand = brand;
    }
    start() {
        console.log(`${this.brand} is starting...`);
    }
}

const car = new Car("Toyota");
car.start(); // Toyota is starting...



/*
Exercice 2 : Héritage avec Object.create
Créez un prototype Animal avec une méthode speak. 
Utilisez Object.create pour créer un objet Dog qui hérite de Animal.

*/
// Créer le prototype Animal :
const Animal = {
    speak: function () {
        console.log(`${this.name} makes a sound.`);
    },
};

// Créer un objet Dog qui hérite de Animal :
const Dog = Object.create(Animal);
Dog.name = "Buddy";
Dog.bark = function () {
    console.log(`${this.name} says woof!`);
};

Dog.speak(); // Buddy makes a sound.
Dog.bark();  // Buddy says woof!




/*

Exercice 3 : Fusionner des objets
Fusionnez les objets suivants en un seul objet avec Object.assign :
const obj1 = { a: 1 };
const obj2 = { b: 2, c: 3 };
const obj3 = { c: 4, d: 5 };
*/

// Code pour fusionner :

const obj1 = { a: 1 };
const obj2 = { b: 2, c: 3 };
const obj3 = { c: 4, d: 5 };

const merged = Object.assign({}, obj1, obj2, obj3);
console.log(merged); // { a: 1, b: 2, c: 4, d: 5 }


