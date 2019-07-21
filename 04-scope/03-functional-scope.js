/* 
  Variables declared inside of a function are 'locally-scoped'. 
  They cannot be referenced outside of the function.   
*/

function happyFunction() {
  let message = 'I am so happy!';
  console.log(message);
}
happyFunction();
console.log(message);

