// Fonction pure : même entrée = même sortie, aucun effet de bord.
export const add = (a: number, b: number): number => a + b;

// Fonction impure : dépend d'une variable externe.
let counter = 0;
export const incrementCounter = (): number => ++counter;

// Exemple d'utilisation
console.log(add(2, 3)); // 5
console.log(incrementCounter()); // 1
console.log(incrementCounter()); // 2
