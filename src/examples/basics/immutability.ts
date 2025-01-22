// Exemple d'objet immuable (en utilisant Object.freeze)
const person = Object.freeze({ name: 'Alice', age: 25 });

// Tentative de modification (échoue silencieusement en mode strict)
// person.age = 26;

// Utilisation d'une copie pour modifier une propriété (approche fonctionnelle)
const updatedPerson = { ...person, age: 26 };
console.log(updatedPerson); // { name: 'Alice', age: 26 }