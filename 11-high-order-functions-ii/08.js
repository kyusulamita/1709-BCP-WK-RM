/*

  what if both functions take parameters?
  https://goo.gl/v6EHCW
  https://goo.gl/1KuZJg
  
*/


function getGreeter(name1) {

  return function(name2) {
    console.log('Hi ' + name1 + ', meet ' + name2);
  };
}

let greeter = getGreeter('Marie');
greeter('Rosalind');
greeter('Bob');
greeter();

const sulaGreeter = getGreeter('Sula');
sulaGreeter('Pusheen');
greeter('Bob');