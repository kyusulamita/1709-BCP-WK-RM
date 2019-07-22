/*
.concat Combines two or more arrays

@param items — Additional items to add to the end of array1.
@returns combinedArr {arr} 
*/


let older = ['Ringo', 'John'];
let younger = ['Paul', 'George'];
const moreNames = ['Luke'];
let notAnArr = 'John';
let notAnArr2 = "Thomas"

const names = older.concat(younger, moreNames);
// const names = older.concat("Bob");

// const names = younger.concat(notAnArr, notAnArr2);

// const names = older.concat("Pusheen", "Mr Sheep", 4);

// younger.push(notAnArr, notAnArr2);
console.log(names);
console.log(older);
console.log(younger);