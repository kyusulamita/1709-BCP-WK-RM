// on the global scope
let global = 'ear';
console.log('outer', global);
debugger;
function funFunction() {
  // functional scope
  debugger;
  console.log('inner', global);
}
funFunction();