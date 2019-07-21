/* 
  Variables declared inside of a function are 'locally-scoped'. 
  They cannot be referenced outside of the function.   
*/

/* EXAMPLE START ===========
function happyFunction() {
  let message = 'I am so happy!';
  console.log(message);
}
happyFunction();
console.log(message);

======== EXAMPLE END */

/* What if a variable is defined locally and globally? */

/* EXAMPLE START ===========

let message = 'think globally';
function logAMessage() {
  let message = 'act locally';
  // JS will look for message locally, first   console.log(message);
}
logAMessage();
======== EXAMPLE END */
