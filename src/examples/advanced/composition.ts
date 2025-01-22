// Composition de fonctions : combiner deux fonctions en une seule
const compose =
  <A, B, C>(f: (b: B) => C, g: (a: A) => B) =>
  (x: A): C =>
    f(g(x));

// Exemple : convertir en majuscules puis inverser une chaîne
const toUpperCase = (str: string): string => str.toUpperCase();
const reverse = (str: string): string => str.split('').reverse().join('');

const shoutReverse = compose(reverse, toUpperCase);

console.log(shoutReverse('hello')); // "OLLEH"
