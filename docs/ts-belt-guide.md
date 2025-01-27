# Guide d'utilisation de ts-belt

## Introduction

`ts-belt` est une bibliothèque JavaScript/TypeScript moderne et performante, conçue pour faciliter la programmation fonctionnelle en TypeScript. Elle offre une approche "data-first" intuitive, une excellente compatibilité avec TypeScript et Flow, et des types de données sécurisés tels que `Option` et `Result`.

## Installation

Pour intégrer `ts-belt` à votre projet, utilisez npm ou yarn :
`npm install @mobily/ts-belt --save`
ou
`yarn add @mobily/ts-belt`

## Principes de base
`ts-belt` adopte une approche "data-first", où la donnée est généralement le premier argument des fonctions. Cette méthode améliore la lisibilité et facilite la composition des fonctions. 

## Modules principaux
La bibliothèque est structurée en plusieurs modules, chacun dédié à un type de données ou à des opérations spécifiques :

Array (A) : Fonctions utilitaires pour les tableaux.  
Boolean (B) : Fonctions utilitaires pour les booléens.  
Function (F) : Fonctions utilitaires diverses (par exemple, `debounce`, `throttle`).  
Guards (G) : Garde-types pour TypeScript.  
Number (N) : Fonctions utilitaires pour les nombres.  
Object (D) : Fonctions utilitaires pour les objets.  
Option (O) : Gestion des valeurs optionnelles, représentant la présence ou l'absence d'une valeur.  
Result (R) : Gestion des opérations pouvant échouer, sans recourir aux exceptions.  
String (S) : Fonctions utilitaires pour les chaînes de caractères.  

## Exemples d'utilisation

### Manipulation des tableaux
```js
import { A } from '@mobily/ts-belt';

const nombres = [1, 2, 3];
const doubles = A.map(nombres, (n) => n * 2);

console.log(doubles); // [2, 4, 6]
```

## Gestion des chaînes de caractères

```js
import { A } from '@mobily/ts-belt';

const nombres = [1, 2, 3];
const doubles = A.map(nombres, (n) => n * 2);

console.log(doubles); // [2, 4, 6]
```

## Utilisation des types Option et Result

```js
import { O, R } from '@mobily/ts-belt';

// Option
const peutÊtreNombre = O.Some(42);
const valeur = O.getWithDefault(peutÊtreNombre, 0);

console.log(valeur); // 42

// Result
const division = (a: number, b: number) =>
  b === 0 ? R.Error('Division par zéro') : R.Ok(a / b);

const résultat = division(10, 2);

if (R.isOk(résultat)) {
  console.log(`Résultat : ${résultat.value}`); // Résultat : 5
} else {
  console.error(`Erreur : ${résultat.error}`);
}
```

## Documentation complète

Pour une documentation détaillée et des exemples supplémentaires, veuillez consulter le site officiel de `ts-belt` : https://mobily.github.io/ts-belt/

Ce guide fournit des informations approfondies sur chaque module, leurs fonctions associées et des exemples pratiques pour vous aider à tirer le meilleur parti de `ts-belt` dans vos projets TypeScript.
