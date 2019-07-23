/* 

use the for…in loop to loop through all of the keys in an object 

*/


let pusheen = {
  name: 'Pusheen',
  age: 7,
  color: 'gray and tabby'
};

for (let key in pusheen) {
  console.log("key", key);
}

// for (let key in pusheen) {
//   const value = pusheen[key];
//   console.log("Pusheen's", key, 'is', value);
// }

// for (let key in pusheen) {
//   const value = pusheen.key;
//   console.log("Pusheen's", key, 'is', value);
// }