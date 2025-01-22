// Détermine si un nombre est pair
export const isEven = (n: number): boolean => n % 2 === 0;

// Calcule la somme des éléments d'un tableau
export const sumArray = (arr: number[]): number =>
  arr.reduce((acc, val) => acc + val, 0);

// Calcule la factorielle d'un nombre
export const factorial = (n: number): number =>
  n <= 1 ? 1 : n * factorial(n - 1);

// Divise un tableau en sous-tableaux de taille spécifiée
export const chunkArray = <T>(array: T[], chunkSize: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};

// Compose une série de fonctions de gauche à droite
export const pipe =
  <T>(...fns: Array<(arg: T) => T>) =>
  (initialValue: T): T =>
    fns.reduce((acc, fn) => fn(acc), initialValue);

// Clone profondément un objet ou un tableau
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));