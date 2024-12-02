/* 
Exercice 1 : Identifier la portée
*/

function example() {
    var a = 10;
    if (true) {
        let b = 20;
        var c = 30;
    }
    console.log(a); // ?
    console.log(b); // ?
    console.log(c); // ?
}
example();

/*
Questions :

Quelle portée ont a, b, et c ?
Que se passe-t-il si on remplace var par let pour la variable c ?

*/

/* 
Exercice 2 : Propriétés privées
Complétez cette classe pour que secret soit une propriété privée 
et que l'utilisateur puisse y accéder uniquement 
via une méthode getSecret.
*/

class SecretKeeper {
    // Votre code ici
}

const keeper = new SecretKeeper("Mon secret");
console.log(keeper.getSecret()); // Mon secret
console.log(keeper.secret); // Indéfini

