/* 
1. Coercition Implicite - Combinaison des types
* 
console.log([] + []);        // ?
console.log([] + {});        // ?
console.log({} + []);        // ?
console.log({} + {});        // ?


/*
2. Comparaison avec ==
*/
console.log(null == undefined);       // ?
console.log(null === undefined);      // ?
console.log(false == "0");            // ?
console.log(false === "0");           // ?
console.log(0 == "");                 // ?
console.log(0 === "");                // ?


/*
3. Valeurs "False"
*/

console.log(false == []);            // ?
console.log(false == {});            // ?
console.log(false == null);          // ?
console.log(!"false");               // ?
console.log(!"");                    // ?
console.log(![]);                    // ?


/*
4. Opérations Arithmétiques et Coercition
*/

console.log("5" - 1);         // ?
console.log("5" + 1);         // ?
console.log("5" * 2);         // ?
console.log("5" / "2");       // ?
console.log("five" * 2);      // ?
console.log("10" - true);     // ?
console.log("10" - false);    // ?


/*
5. Mystère des Tableaux et Objets
*/
console.log([1, 2] + [3, 4]);        // ?
console.log({} + []);                // ?
console.log([] + {});                // ?
console.log(+true);                  // ?
console.log(+[]);                    // ?
console.log({} - []);                // ?




