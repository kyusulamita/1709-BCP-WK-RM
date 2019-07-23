/* 
  create a new object using curly braces 
*/


/* 

an object's keys are always strings; you can omit the quotation marks 


*/

let pusheen = {
  name: 'Pusheen',
  age: 7,
  colour: 'gray and tabby',
  isHappy: true,
};


/*

is the same as:

*/

let pusheenTheSecond = {
  "name": 'Pusheen II',
  "age": 7,
  "colour": 'gray and tabby',
  "isHappy": true,
};


/*
  avoid mixing both formats though :( Not good practice
*/

let pusheenTheThird = {
  "name": 'Pusheen III',
  age: 7,
  colour: 'gray and tabby',
  "isHappy": true,
}


//
// ─── ACCESSING VALUES ───────────────────────────────────────────────────────────
//

  

// let pusheen = {
//   name: 'Pusheen',
//   age: 7,
//   colour: 'gray and tabby',
//   isHappy: true,
// };
/*
if you have a long key like "favourite food", then you need quotes
*/

/* 

use bracket notation to access a value  

pass a string into the brackets that corresponds with a key in the object 

*/


// console.log(pusheen['name']);
// console.log(pusheen['age']);
// console.log(pusheen['color']);

// console.log(pusheen['notAKeyInTheObject']);

// let keyToCheck = 'isHappy';
// let word = 'fav'
// console.log(pusheen[keyToCheck]);
// console.log(pusheen['is' + 'Happy']);
// console.log(pusheen[word + 'Food']) //'favFood'


/* 

you can also use dot notation to access values

*/
// let keyToCheck = 'name';
// console.log(pusheen);
// ! will not work
// console.log(pusheen.name); // no quotes needed with dot notation
// console.log(pusheen.age);
// console.log(pusheen.color);

// YOU CAN NOT USE VARIABLES WITH DOT NOTATION !!

// console.log(pusheen.keyToCheck); //undefined