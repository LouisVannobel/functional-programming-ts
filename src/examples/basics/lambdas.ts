// Fonction lambda pour doubler un nombre
const numbersToDouble = [1, 2, 3];
const double = (x: number): number => x * 2;

// Utilisation avec map
const doubledNumbers = numbersToDouble.map(double);

console.log(doubledNumbers); // [2, 4, 6]
