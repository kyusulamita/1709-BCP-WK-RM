/* note the inner function can access the scope of the outer function,but the opposite is not true */
/*
function outer() {
  let outerVar = 'outer';
  function inner() {
    let innerVar = 'inner';
    console.log(outerVar, innerVar);
  }
  inner();
  console.log(innerVar);
}
outer();
*/


/* the inner function still looks for a local declaration of the variable name before looking at the next level of scope */
/*
function outer() {
  let outerVar = 'outer';
  function inner(outerVar) {
    let innerVar = 'inner';
    console.log(outerVar, innerVar);
  }
  inner();
}
outer();
*/