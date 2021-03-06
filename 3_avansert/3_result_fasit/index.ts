import { Result } from './result';

// I mange moderne språk har man en egen type for typesikker håndtering av
// operasjoner som kan feile. Å definere en praktisk slik type selv i TypeScript
// kan være litt kronglete, så Result typen vi har kommet fram til på prosjekt
// ligger i result.ts

// Eksempel:

function moodyAdd(a: number, b: number): Result<number, string> {
  if (Math.floor(Math.random() * 2) == 0) {
    return Result.ok(a + b);
  } else {
    return Result.err('Sorry, I do not feel like adding numbers today');
  }
}

const hopefullyFour = moodyAdd(3, 1);

// Oppgave 1: Håndter og skriv ut resultatet eller feilverdien i hopefullyFour,
// avhengig av hva som skjedde:

if (hopefullyFour.isOk()) {
  console.log("We added successfully! Result was", hopefullyFour.value);
} else {
  console.log("Oh, no! It failed. Error value was", hopefullyFour.error);
}
