/*

slice lets us make a copy of a section of the array or the whole array


optional Parameters
1. startIndex
2. endIndex 

https://goo.gl/P7617D

*/

let petNames = ['Mr. Bear', 'Mr. Sheep', 'Planty', 'Pusheen'];
let petNames2 = petNames.slice();


petNames2.push('Bob');

console.log(petNames);

// no argument, makes copy of the whole thing
// let petNamesCopy = petNames.slice();
// console.log(petNamesCopy);

// one argument, we start at index two and go all the way to the end
// petNamesCopy = petNames.slice(2);

// two arguments, we start at index 1 and start right before index 3
// petNamesCopy = petNames.slice(1, 3);

// // one argument, we start 3 BEFORE THE END
// petNamesCopy = petNames.slice(-3);

// // two arguments, we start 3 BEFORE THE END and stop 1 BEFORE THE END
// petNamesCopy = petNames.slice(-3, -1);
// console.log(petNamesCopy);




// https://goo.gl/6PGgVA REVERSE