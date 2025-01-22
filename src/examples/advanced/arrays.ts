import { A } from '@mobily/ts-belt';

// Exemple 1 : Filtrer les nombres pairs
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = A.filter(numbers, (n) => n % 2 === 0);
console.log(evenNumbers); // [2, 4, 6]

// Exemple 2 : Doubler les nombres
const doubledNumbers = A.map(numbers, (n) => n * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10, 12]

// Exemple 3 : Réduire un tableau en une somme
const sum = A.reduce(numbers, 0, (acc, n) => acc + n);
console.log(sum); // 21