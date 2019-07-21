/* Any block of code (code inside of curly brackets) creates its own scope, too */
if (true) {
  let block = 'Jenny from the';
  console.log(block, 'block');
}
console.log(block);


/* the pre-ES6 var keyword ignores block scope */
// if (true) {
//   var block = 'Jenny from the';
//   console.log(block, 'block');
// }
// console.log(block);