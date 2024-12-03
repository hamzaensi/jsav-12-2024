// 1. Définir ce qu'est un objet
const car = {
    brand: "Toyota",
    model: "Corolla",
    start: function () {
        console.log("Car is starting...");
    },
};

console.log(car.brand); // Toyota
car.start(); // Car is starting...

// Différences entre let et const pour un objet ?


// 2. Les différentes façons de créer des objets
/*
a) Littéral d'objet
Description : La manière la plus simple et directe de créer un objet.
*/
const person = {
    name: "Alice",
    age: 25,
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    },
};
person.greet(); // Hello, my name is Alice

/*
Avantages :

Rapide et lisible.
Utilisé pour des objets simples.

*/


/*
b) Objet avec Object.create
Description : Crée un objet avec un prototype spécifié.
*/
const prototypePerson = {
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    },
};

const person = Object.create(prototypePerson);
person.name = "Bob";
person.greet(); // Hello, my name is Bob

/*
Avantages :

Permet de créer des objets héritant directement d'un prototype.
Limite :

Moins intuitif que les autres méthodes.
*/

/*
c) Constructeur avec new Function
Description : Utilise une fonction constructeur pour créer 
des objets.
*/

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
        console.log(`Hello, my name is ${this.name}`);
    };
}

const person = new Person("Charlie", 30);
person.greet(); // Hello, my name is Charlie

/*
Avantages :

Utile pour créer plusieurs objets similaires avec 
des propriétés et des méthodes.

Limite :

Peut être remplacé par les classes (plus modernes).

*/


/*
d) Classes ES6
Description : Syntaxe moderne pour créer des objets et gérer l'héritage.
*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const person = new Person("Diana", 35);
person.greet(); // Hello, my name is Diana

/*
Avantages :

Plus lisible et proche des langages orientés objet traditionnels.
Supporte l'héritage avec extends.

*/

/*
e) Fonctions Factories
Description : Utilise une fonction pour retourner un nouvel objet.
*/
function createPerson(name, age) {
    return {
        name,
        age,
        greet() {
            console.log(`Hello, my name is ${this.name}`);
        },
    };
}

const person = createPerson("Eve", 28);
person.greet(); // Hello, my name is Eve

/*
Avantages :

Flexible et sans besoin du mot-clé new.

Limite :

Ne gère pas bien l'héritage comparé aux classes ou Object.create.
*/

/*
f) Utilisation de Object.assign
Description : Permet de copier des propriétés d’un ou plusieurs objets 
vers un nouvel objet.

Exemple :
*/


const obj1 = { name: "Alice" };
const obj2 = { age: 25 };
const person = Object.assign({}, obj1, obj2);
console.log(person); // { name: "Alice", age: 25 }

/*
Avantages :

Pratique pour fusionner plusieurs objets.
Utilisé pour le "shallow copy" (copie peu profonde).

*/

/*
g) Utilisation de la notation JSON
Description: Charge ou sauvegarde un objet sous forme de
chaîne JSON.
*/

const jsonString = '{"name": "Frank", "age": 40}';
const person = JSON.parse(jsonString);
console.log(person.name); // Frank


/*
Avantages :

Parfait pour des échanges de données entre client et serveur.
Limite :

Ne permet pas de stocker des méthodes.

*/




/*****************
 * 
 * prototype ?
 */



function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
};

const person1 = new Person("Alice");
const person2 = new Person("Bob");

person1.greet(); // Hello, my name is Alice
person2.greet(); // Hello, my name is Bob


// b) Qu’est-ce que __proto__ ?

console.log(person1.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true


// c) La chaîne de prototypes

console.log(person1.hasOwnProperty("name")); // true
console.log(person1.hasOwnProperty("greet")); // false
console.log(person1.greet !== undefined); // true


// 6. Méthodes importantes liées au prototype

// Object.create(proto) : Crée un objet avec le prototype spécifié.

const prototypePerson = {
    greet: function () {
        console.log("Hello!");
    },
};

const person = Object.create(prototypePerson);
person.greet(); // Hello!


//Object.getPrototypeOf(obj) : Obtient le prototype d’un objet.

console.log(Object.getPrototypeOf(person) === prototypePerson); // true


/*************/
//Object.setPrototypeOf(obj, proto) : Change le prototype d’un objet.

const dog = {};
const animalPrototype = { species: "Animal" };

Object.setPrototypeOf(dog, animalPrototype);
console.log(dog.species); // Animal




/************
 *  Héritage
 */
/*
3. Les différentes façons d'hériter

1. Héritage par prototype
Le modèle de base d’héritage en JavaScript repose sur les prototypes.
*/
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function () {
    console.log(`${this.name} makes a sound.`);
};

function Dog(name, breed) {
    Animal.call(this, name); // Appeler le constructeur parent
    this.breed = breed;
}


// Héritage du prototype
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
    console.log(`${this.name} barks.`);
};

const dog = new Dog("Buddy", "Golden Retriever");
dog.speak(); // Buddy makes a sound.
dog.bark();  // Buddy barks.

/*
2. Héritage avec Object.create
Cette méthode est plus simple et directe pour créer un objet qui hérite d'un autre.
*/

const Animal = {
    speak: function () {
        console.log(`${this.name} makes a sound.`);
    },
};

const dog = Object.create(Animal);
dog.name = "Buddy";
dog.bark = function () {
    console.log(`${this.name} barks.`);
};

dog.speak(); // Buddy makes a sound.
dog.bark();  // Buddy barks.



/*
3. Héritage avec les classes ES6
Les classes introduites dans ES6 offrent une syntaxe plus
claire pour l'héritage.
*/

class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Appelle le constructeur de la classe parent
        this.breed = breed;
    }
    bark() {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog("Buddy", "Golden Retriever");
dog.speak(); // Buddy makes a sound.
dog.bark();  // Buddy barks.










