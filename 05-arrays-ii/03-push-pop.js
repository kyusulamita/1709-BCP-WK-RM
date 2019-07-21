/* 
  .push takes one or more elements and adds them to the end of the array.
  .push returns the new length of the array. 

  learn more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
*/
// let names = ["Mr Bear", "Pusheen", "Planty"];
// let newLength = names.push("Mr Sheep")
// console.log(names);
// console.log(newLength);


/* 
  .pop removes one element from the end of the array. 
  it returns the removed element 
  learn more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
*/
// let names = ["Mr Bear", "Pusheen", "Planty", "Mr Sheep"];
// let mrSheep = names.pop();
// console.log(names);
// console.log(mrSheep);


/* 
  mutating an array vs reassigning
*/
// let names = ["Mr Bear", "Pusheen", "Planty", "Mr Sheep"];
// while(names.length > 0){
//   const goodbyePet = names.pop();
//   console.log("goodbye", goodbyePet);
// }

// console.log(names)