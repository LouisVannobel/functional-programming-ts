// Fonction d'ordre supérieur : applique une fonction donnée à chaque élément d'un tableau
const map = <T, U>(arr: T[], fn: (item: T) => U): U[] => {
    const result: U[] = [];
    for (const item of arr) {
      result.push(fn(item));
    }
    return result;
  };
  
  // Exemple d'utilisation avec une fonction lambda
  const numbers = [1, 2, 3];
  const doubled = map(numbers, (n) => n * 2);
  
  console.log(doubled); // [2, 4, 6]
  
  // Fonction retournant une autre fonction (closure)
  const multiplier = (factor: number) => (n: number) => n * factor;
  const triple = multiplier(3);
  
  console.log(triple(5)); // 15  