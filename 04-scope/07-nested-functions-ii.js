/* note the inner function can access the scope of the outer function,but the opposite is not true */
// /*
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
// */