/*
// Exercice 1

const tableau = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let cumul = 0;

tableau.forEach((valeur) => {
    cumul += valeur
})

console.log(`La somme du tableau est ${cumul}`);
*/

// Exercice 2 & 3

const notes = [10, 15, 20, 5, 0];
let cumul = 0;

/*
const nouveau_tableau = notes.map((valeur, i) => {
    return `La note N°${i + 1} vaut ${valeur}`;
})

nouveau_tableau.forEach((valeur) => {
    console.log(valeur)
})
*/

notes.forEach((valeur, i) => {
    console.log(`La note N°${i + 1} vaut ${valeur}`);
    cumul += valeur;
})

let moyenne = cumul / notes.length;
console.log(`La moyenne est de ${moyenne}`);