import { S } from '@mobily/ts-belt';

// Exemple 1 : Supprimer les espaces inutiles
const trimmed = S.trim('   hello world   ');
console.log(trimmed); // "hello world"

// Exemple 2 : Diviser une chaîne en mots
const words = S.split('hello world functional programming', ' ');
console.log(words); // ["hello", "world", "functional", "programming"]

// Exemple 3 : Vérifier si une chaîne commence par un mot spécifique
const startsWithHello = S.startsWith('hello world', 'hello');
console.log(startsWithHello); // true