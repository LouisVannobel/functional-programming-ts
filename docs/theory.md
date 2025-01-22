# Théorie : Programmation Fonctionnelle

## Concepts Clés

### 1. Immutabilité
En programmation fonctionnelle, les données sont immuables : elles ne peuvent pas être modifiées après leur création. Cela permet d'éviter des effets de bord imprévus et rend le code plus prévisible.

#### Pourquoi est-ce important ?
- **Sécurité multithreadée** : Dans un environnement multithreadé, l'immutabilité garantit qu'aucun thread ne peut modifier les données partagées, réduisant ainsi les conflits.
- **Débogage simplifié** : Les données immuables ne changent pas, ce qui facilite le suivi des valeurs dans le temps.

#### Exemple :
const person = Object.freeze({ name: 'Alice', age: 25 });
const updatedPerson = { ...person, age: 26 };
console.log(updatedPerson); // { name: 'Alice', age: 26 }

---

### 2. Fonctions Pures
Une fonction pure retourne toujours le même résultat pour les mêmes entrées et n'a pas d'effets de bord. Cela les rend prévisibles et faciles à tester.

#### Pourquoi est-ce important ?
- **Testabilité** : Les fonctions pures n'ont pas besoin de dépendances externes, ce qui facilite leur test.
- **Réutilisabilité** : Elles peuvent être utilisées dans différents contextes sans modifier leur comportement.

#### Exemple :
const add = (a: number, b: number): number => a + b;
console.log(add(2, 3)); // 5

---

### 3. Curryfication
La curryfication consiste à transformer une fonction prenant plusieurs arguments en une série de fonctions prenant un seul argument. Cela permet de créer des fonctions spécialisées en fixant certains arguments.

#### Pourquoi est-ce important ?
- **Réutilisabilité accrue** : Créez des fonctions spécifiques à partir de fonctions générales.
- **Lisibilité améliorée** : Le code devient plus lisible et expressif.

#### Exemple :
const multiply = (a: number) => (b: number) => a * b;
const double = multiply(2);
console.log(double(5)); // 10

---

### 4. Composition de Fonctions
La composition combine plusieurs fonctions simples en une seule fonction complexe. Cela favorise la modularité et la lisibilité du code.

#### Pourquoi est-ce important ?
- **Modularité** : Chaque fonction se concentre sur une tâche spécifique.
- **Lisibilité** : La composition remplace des chaînes d'appels imbriquées par une structure linéaire.

#### Exemple :
const toUpperCase = (str: string): string => str.toUpperCase();
const reverse = (str: string): string => str.split('').reverse().join('');
const shoutReverse = (str: string): string => reverse(toUpperCase(str));
console.log(shoutReverse('hello')); // "OLLEH"

Avec `ts-belt` :

import { pipe } from '@mobily/ts-belt';
const shoutReverse = pipe(
(str: string) => str.toUpperCase(),
(str) => str.split('').reverse().join('')
);
console.log(shoutReverse('hello')); // "OLLEH"

---

### 5. Monades (`Option`, `Result`)
Les monades permettent de gérer des valeurs optionnelles ou des erreurs sans utiliser `null`, `undefined` ou lever d'exceptions.

#### Option
Une monade qui représente une valeur optionnelle (présente ou absente).

**Exemple avec `ts-belt` :**

import { O } from '@mobily/ts-belt';
const safeDivide = (a: number, b: number): O.Option<number> =>
b === 0 ? O.None : O.Some(a / b);
console.log(O.getWithDefault(0)(safeDivide(10, 2))); // 5
console.log(O.getWithDefault(0)(safeDivide(10, 0))); // 0

#### Result
Une monade qui représente soit un succès (`Ok`) soit une erreur (`Error`).

**Exemple avec `ts-belt` :**

import { R } from '@mobily/ts-belt';
const parseNumber = (input: string): R.Result<number, string> =>
isNaN(Number(input)) ? R.Error('Not a valid number') : R.Ok(Number(input));
console.log(
R.match(parseNumber('42'), {
Ok: (value) => Parsed value is ${value},
Error: (err) => Error: ${err},
})
); // "Parsed value is 42"

---

## Exemple Combiné

Voici un exemple combinant plusieurs concepts comme l'immutabilité, la composition et les monades :

### Transformation d'une liste d'utilisateurs

import { A, O } from '@mobily/ts-belt';
type User = { id: number; name: string; age?: number };
// Liste initiale (immuable)
const users: User[] = [
{ id: 1, name: 'Alice', age: 25 },
{ id: 2, name: 'Bob' },
{ id: 3, name: 'Charlie', age: 30 },
];
// Pipeline fonctionnel
const processUsers = A.map(users, (user) => ({
...user,
age: O.getWithDefault(18)(O.fromNullable(user.age)), // Ajout d'un âge par défaut si absent
}));
console.log(processUsers);
// [
// { id: 1, name: 'Alice', age: 25 },
// { id: 2, name: 'Bob', age: 18 },
// { id: 3, name: 'Charlie', age: 30 },
// ]

---

## Bonnes Pratiques en Programmation Fonctionnelle

1. **Évitez les effets de bord**
   - Les fonctions doivent être pures et ne pas modifier directement leurs arguments.

2. **Utilisez des outils comme `ts-belt`**
   - Facilitez la gestion des erreurs (`Result`) et des valeurs optionnelles (`Option`).

3. **Favorisez la composition**
   - Combinez des fonctions simples pour créer des pipelines complexes.

4. **Privilégiez l'immuabilité**
   - Utilisez des structures immuables pour éviter les conflits liés à l'état global.

---

## Pourquoi utiliser la Programmation Fonctionnelle ?

1. **Lisibilité et simplicité**
   - Le code est plus facile à comprendre car il est basé sur des fonctions pures et prévisibles.

2. **Moins de bugs**
   - L'immutabilité et l'absence d'effets de bord réduisent les erreurs liées à l'état global.

3. **Réutilisabilité**
   - Les fonctions pures sont plus faciles à tester et à réutiliser dans différents contextes.

4. **Parallélisme facilité**
   - L'absence d'état mutable rend la programmation concurrente plus sûre et plus simple.
