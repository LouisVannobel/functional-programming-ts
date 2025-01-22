// Exemple de closure : une fonction qui capture une variable locale.
export const createCounter = () => {
    let count = 0;
    return () => ++count;
  };
  
  const counter1 = createCounter();
  console.log(counter1()); // 1
  console.log(counter1()); // 2
  
  const counter2 = createCounter();
  console.log(counter2()); // 1 (indépendant du premier compteur)
