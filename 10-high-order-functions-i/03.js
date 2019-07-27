/* 

how do we call all the functions in the array? how have we always    looped through an array of values? 

*/

function happyFunction() {
  console.log('I am happy!');
}


let amazingArray = [happyFunction, happyFunction, happyFunction];
console.log(amazingArray);

// for (let i = 0; i < amazingArray.length; i++) {
//   let element = amazingArray[i]; // each element is a function!
//   element();
// }