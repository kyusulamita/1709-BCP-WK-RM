/*
.splice mutates the original array; 

it's used to add or remove elements from the middle of an array (instead of adding or removing from either end  lets us know if the element is in the array

@params startIdx {number} [optional]
@params deleteCount {number} [optional]
@params elementsToInsert [optional]

@returns elements that were spliced out of the array
*/

// let names = ['Paul', 'George', 'John', 'Ringo'];
// let acrossTheUniverse = names.splice(1); // ['George', 'John', 'Ringo']

// let acrossTheUniverse = names.splice(1, 2); // ['George', 'John']


// let acrossTheUniverse = names.splice(1, 2, 'Pusheen'); // ['George', 'John']
// console.log(acrossTheUniverse);
// console.log(names);

// let acrossTheUniverse = names.splice(1, 2, 'Pusheen'); // ['George', 'John']

// console.log(names);// ['Paul', 'Pusheen','Ringo']
// console.log(acrossTheUniverse);


// let names = ['Paul', 'George', 'John', 'Ringo'];
// let acrossTheUniverse = names.splice(1, 0, 'Pusheen'); // []

// console.log(names);// ['Paul', 'Pusheen', 'George', 'John','Ringo']
// console.log(acrossTheUniverse);


// let names = ['Paul', 'George', 'John', 'Ringo'];
// let acrossTheUniverse = names.splice(); // ['Paul', 'George', 'John', 'Ringo']

// console.log("names", names); // ['Paul', 'George', 'John', 'Ringo']
// console.log(acrossTheUniverse); // []

// names.splice(0);

// names = [];

// while(names.length > 0 ){
//   names.pop();
// }

// console.log(names)


// const names = ['Paul', 'George', 'John', 'Ringo'];
// const acrossTheUniverse = names.splice(1); // [ 'George', 'John', 'Ringo']

// console.log(names); // ['Paul']
// console.log(acrossTheUniverse);


// const pets = ['Pusheen', 'Mr. Bear'];
// pets.splice(1);

// console.log(pets);
