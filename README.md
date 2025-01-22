# Functional Programming with TypeScript

## Introduction

Ce dépôt est une introduction complète à la programmation fonctionnelle avec TypeScript, mettant en avant l'utilisation de la bibliothèque [ts-belt](https://mobily.github.io/ts-belt/). Vous y trouverez :
- Une introduction aux concepts clés de la programmation fonctionnelle (PF).
- Des exemples pratiques en TypeScript.
- Des fonctions utilitaires personnalisées démontrant les principes de la PF.
- Une utilisation approfondie de la bibliothèque `ts-belt`.

---

## Concepts Clés

Les concepts fondamentaux de la programmation fonctionnelle, tels que :
- **[Immutabilité](src/examples/basics/immutability.ts)**
- **[Fonctions pures](src/examples/basics/pure-functions.ts)**
- **[Curryfication](src/examples/advanced/currying.ts)**
- **[Monades](src/examples/advanced/monads.ts)**

Pour plus de détails, consultez [`theory.md`](docs/theory.md).

---

## Fonctions Utilitaires Personnalisées

Le fichier [`customUtils.ts`](src/utils/customUtils.ts) contient plusieurs fonctions utilitaires démontrant les principes de la PF :

- `isEven`: Vérifie si un nombre est pair.
- `sumArray`: Calcule la somme d'un tableau.
- `factorial`: Calcule la factorielle d'un nombre.
- `chunkArray`: Divise un tableau en sous-tableaux.
- `pipe`: Compose des fonctions.
- `deepClone`: Clone profondément un objet ou un tableau.

---

## Utilisation de ts-belt

La bibliothèque [`ts-belt`](https://mobily.github.io/ts-belt/) est utilisée dans ce projet pour simplifier la gestion des données immuables et des erreurs. Voici quelques exemples :

### Manipulation des tableaux :
import { A } from '@mobily/ts-belt';
const numbers = [1, 2, 3];
const doubled = A.map(numbers, (n) => n * 2);
console.log(doubled); // [2, 4, 6]


### Gestion des chaînes :
import { S } from '@mobily/ts-belt';
const trimmed = S.trim(' hello world ');
console.log(trimmed); // "hello world"


Pour un guide complet sur l'utilisation de cette bibliothèque, consultez [`ts-belt-guide.md`](docs/ts-belt-guide.md).

---

## Ressources Complémentaires

Les livres, vidéos, articles et librairies recommandés sont listés dans le fichier [`resources.md`](docs/resources.md).

---