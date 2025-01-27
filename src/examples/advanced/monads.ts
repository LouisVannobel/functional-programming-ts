// Exemple de monade Maybe
class Maybe<T> {
    private constructor(private value: T | null) {}

    static just<T>(value: T): Maybe<T> {
        return new Maybe(value);
    }

    static nothing<T>(): Maybe<T> {
        return new Maybe<T>(null);
    }

    isNothing(): boolean {
        return this.value === null;
    }

    map<U>(f: (value: T) => U): Maybe<U> {
        if (this.isNothing()) {
            return Maybe.nothing<U>();
        } else {
            return Maybe.just(f(this.value as T));
        }
    }

    flatMap<U>(f: (value: T) => Maybe<U>): Maybe<U> {
        if (this.isNothing()) {
            return Maybe.nothing<U>();
        } else {
            return f(this.value as T);
        }
    }

    getOrElse(defaultValue: T): T {
        return this.isNothing() ? defaultValue : (this.value as T);
    }
}

// Utilisation de la monade Maybe
const maybeValue = Maybe.just(5);
const result = maybeValue
    .map(x => x * 2)
    .flatMap(x => Maybe.just(x + 1))
    .getOrElse(0);

console.log(result); // Affiche 11

const maybeNothing = Maybe.nothing<number>();
const resultNothing = maybeNothing
    .map(x => x * 2)
    .flatMap(x => Maybe.just(x + 1))
    .getOrElse(0);

console.log(resultNothing); // Affiche 0

// Exemple de monade Promise
const asyncFunction = (value: number): Promise<number> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(value * 2), 1000);
    });
};

asyncFunction(5)
    .then(result => {
        console.log(result); // Affiche 10 après 1 seconde
        return asyncFunction(result);
    })
    .then(result => {
        console.log(result); // Affiche 20 après 2 secondes
    });




// Dans cet exemple, nous utilisons la structure Option de la librairie ts-belt pour obtenir un comportement similaire à celui de la monade Maybe.
// La fonction O.Some crée une option avec une valeur, tandis que O.None représente une option sans valeur.
// La méthode O.match permet de manipuler les valeurs de manière sécurisée, et getWithDefault permet de fournir une valeur par défaut si l'option est vide.

import { Option, O } from 'ts-belt';
// Utilisation de la structure Option de ts-belt
const optionValue = O.Some(5);
const optionResult = O.match(
    optionValue,
    {
        Some: (x) => O.Some(x * 2),
        None: () => O.None,
    }
)
.flatMap(x => O.Some(x + 1))
.getWithDefault(0);

console.log(optionResult); // Affiche 11

const optionNothing = O.None;
const optionResultNothing = O.match(
    optionNothing,
    {
        Some: (x) => O.Some(x * 2),
        None: () => O.None,
    }
)
.flatMap(x => O.Some(x + 1))
.getWithDefault(0);

console.log(optionResultNothing); // Affiche 0