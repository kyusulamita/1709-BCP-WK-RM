/* 

  a for loop requires three elements:
     1. the for keyword
     2. three optional expressions
     3. a block of code

  for (initialization; condition; final-expression) {
    // block of code
  }

  the block of code will run over and over until the condition evaluates to false
  
*/

while ( i <= 3){
  console.log('i is', i);
  i++;
}

// for (let i = 1; i <= 3; i++) {
//   console.log('i is:', i);
// }

/* the initialization is run first, and only once. it's often used to define a counter variable */


/* then, before every iteration, the condition is checked to see if it's true - if it is, the for loop will run another iteration */

/* then, after each iteration, the final expression is run */

// for (let i = 1; i <= 3; i++) {
//   debugger;
//   console.log('i is:', i);
// }

// // loop in either direction
for (let i = 5; i >= 1; i--) {
  console.log('i is:', i);
}
// i += 100 // i = i + 100
// can increment by any number
// for (let i = 100; i <= 300; i += 100) {
//   console.log('i is:', i);
// }

// use for loops to iterate through a string
let letters = 'abcdefg';

let newLetters = '';
//letters[0]//'a'
//letters[1]//'b'
//letters[2]//'c'
// let newStr = letters + "ef";

for (let i = 0; i < letters.length; i++) {
  let currentLetter = letters[i];
  const capitalChar = currentLetter.toUpperCase();
  newLetters += capitalChar;// newLetters = newLetters + capitalChar
  letters[i] = capitalChar;
  console.log(capitalChar);
}

letters[2] = "C";

console.log(letters);
console.log(newLetters)