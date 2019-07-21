/* consider nested functions */


// let globalVar = 'global';
// function outer() {
//   let outerVar = 'outer';
//   function inner() {
//     let innerVar = 'inner';
//     console.log(globalVar, outerVar, innerVar);
//   }
//   inner();
// }
// outer();

/* Example 2
let collision = 'global';
function outer(collision) {
  function inner() {
    let collision = 'inner';
    console.log(collision);
  }
  inner();
}
outer('outer');
*/

/* Example 3
let collision = 'global';
function outer(collision) {
  function inner() {
    console.log(collision);
  }
  inner();
}
outer('outer');
*/

// /* Example 4

let collision = 'global';
function outer(){
  function inner() {
    console.log(collision)
  }
  inner()
}
outer('outer');

// */

