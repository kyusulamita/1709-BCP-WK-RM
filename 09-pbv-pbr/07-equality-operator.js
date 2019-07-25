/*

=== will compare complex values by reference, not by value!

https://goo.gl/Pyhj18

*/

let array1 = [1, 2, 3]; 
let array2 = [1, 2, 3];

console.log(array1 === array2);

/*

https://goo.gl/CAqV7T

*/

// let array1 = [1, 2, 3]; 
// let array2 = array1; // array1 and array2 share the same reference
// console.log(array1 === array2);