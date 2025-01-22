// Fonction classique
const add = (a: number, b: number): number => a + b;

// Version curryfiée
const curriedAdd = (a: number) => (b: number): number => a + b;

// Exemple d'application partielle
const addFive = curriedAdd(5);
console.log(addFive(10)); // 15

// Curryfication d'une fonction multi-arguments
const multiply = (a: number, b: number, c: number): number => a * b * c;

const curriedMultiply = (a: number) => (b: number) => (c: number): number =>
  a * b * c;

console.log(curriedMultiply(2)(3)(4)); // 24