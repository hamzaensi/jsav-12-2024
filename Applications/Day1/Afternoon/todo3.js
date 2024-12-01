/* 
Exercice 1 : Prototypes et héritage
Créez un objet Bird qui hérite d'un prototype Animal. Ajoutez une méthode spécifique 
à Bird.



Exercice 2 : Classes ES6
Créez une classe Cat qui hérite d’une classe Animal et ajoute une méthode meow().

Exercice 3 : Composition
Créez un objet Car en combinant des fonctionnalités de plusieurs prototypes, 
comme engine (méthode start()) et wheels (méthode roll()).

*/
// Solution
// Execice 1
// Prototype de base
const Animal = {
    eat: function () {
        console.log(`${this.name} is eating.`);
    },
};

// Création de Bird qui hérite d'Animal
const Bird = Object.create(Animal);
Bird.fly = function () {
    console.log(`${this.name} is flying.`);
};

// Création d'une instance
const eagle = Object.create(Bird);
eagle.name = "Eagle";
eagle.eat(); // Eagle is eating.
eagle.fly(); // Eagle is flying.


// Exercice 2

// Classe parent
class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} is eating.`);
    }
}

// Classe enfant
class Cat extends Animal {
    constructor(name, color) {
        super(name); // Appelle le constructeur de Animal
        this.color = color;
    }

    meow() {
        console.log(`${this.name} says meow.`);
    }
}

// Création d'une instance
const kitty = new Cat("Kitty", "white");
kitty.eat(); // Kitty is eating.
kitty.meow(); // Kitty says meow.
console.log(kitty.color); // white
/*
Explications :

class Animal : Définit la classe parent avec une méthode eat().
extends : Utilisé pour créer une relation d'héritage.
super(name) : Appelle le constructeur de la classe parent pour initialiser name.
Cat hérite des propriétés/méthodes d'Animal et ajoute sa propre méthode meow().
*/
// Exercice 3

// Prototypes de fonctionnalités
const engine = {
    start: function () {
        console.log(`${this.name} engine is starting.`);
    },
};

const wheels = {
    roll: function () {
        console.log(`${this.name} is rolling.`);
    },
};

// Création d'un objet Car
const Car = Object.assign({}, engine, wheels);

// Création d'une instance
const myCar = Object.create(Car);
myCar.name = "Tesla";

myCar.start(); // Tesla engine is starting.
myCar.roll();  // Tesla is rolling.


/*
Explications :

engine et wheels définissent des fonctionnalités séparées.
Object.assign({}, engine, wheels) fusionne les propriétés/méthodes des deux prototypes dans un nouvel objet Car.
Object.create(Car) : Crée une instance de Car qui hérite des méthodes start et roll.

*/

/*

Conclusion des solutions
Ces exercices démontrent trois approches clés pour implémenter l'héritage en JavaScript :

Prototypes pour un héritage simple et direct.
Classes ES6 pour une syntaxe moderne et claire.
Composition pour réutiliser des fonctionnalités dans différents objets.

*/





