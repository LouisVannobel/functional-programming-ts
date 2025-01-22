import { pipe } from '@mobily/ts-belt';
import { A } from '@mobily/ts-belt';

// Pipeline fonctionnel pour transformer un tableau
const processNumbers = pipe(
  [1, -2, 3, -4],
  A.filter((n) => n > 0), // Filtrer les nombres positifs
  A.map((n) => n * n),    // Élever au carré
);

console.log(processNumbers); // [1, 9]