/* 
Exercice 1 : Portée globale
Énoncé :
Vous devez créer deux fonctions :

Une fonction augmenterCompteur qui incrémente une variable globale compteur.
Une fonction afficherCompteur qui affiche la valeur actuelle de compteur.
Contraintes :

Si compteur atteint 5, réinitialisez-le à 0.
Interdisez la modification directe de compteur à l'extérieur des fonctions.

*/

// Variable globale
let compteur = 0;

// Fonction pour incrémenter le compteur


// Fonction pour afficher le compteur


// Exemple d'utilisation
augmenterCompteur();
augmenterCompteur();
afficherCompteur();
for (let i = 0; i < 5; i++) {
    augmenterCompteur();
}
afficherCompteur(); // Compteur : ? (réinitialisé à 0 après avoir atteint 5)



/*
Exercice 2 : Portée locale (fonction et bloc)
Énoncé :
Écrivez une fonction creerMultiplicateur qui :

Prend un nombre facteur en entrée.
Retourne une fonction qui multiplie son argument par facteur.

Contraintes :

Utilisez uniquement des variables avec let ou const.
Le facteur doit rester accessible dans la fonction retournée.

*/
/*
function creerMultiplicateur(facteur) {

    "code here ..."
}

// Exemple d'utilisation
const multiplierPar2 = creerMultiplicateur(2);
const multiplierPar5 = creerMultiplicateur(5);

console.log(multiplierPar2(3)); // 6
console.log(multiplierPar5(4)); // 20
*/


/*
Exercice 3 : Portée lexicale

Créez un compteur sécurisé avec :

Une fonction creerCompteur qui initialise une variable privée valeur.
Deux méthodes dans un objet retourné :
incrementer : Incrémente valeur de 1.
afficher : Affiche la valeur actuelle.
Contraintes :

valeur doit rester inaccessible en dehors des méthodes.
Utilisez la portée lexicale pour garantir la sécurité.
*/
/*
function creerCompteur() {

    "Code here"
}

// Exemple d'utilisation
const compteur = creerCompteur();
compteur.afficher(); // Valeur actuelle : 0
compteur.incrementer();
compteur.incrementer();
compteur.afficher(); // Valeur actuelle : 2

*/

