// let pusheen = {
//   name: 'Pusheen',
//   age: 7,
//   color: 'gray and tabby',
//   isHappy: true,
//   greet: function(name){
//     console.log(`Hello ${name}, I am Pusheen the gray and tabby cat. I am 7.`);
//   },
//   birthYear: function(currentYear){
//     return currentYear - 7;
//   }
// };

// pusheen.greet("Pond");
// pusheen.greet("Bethany");

// pusheen.age++;
// pusheen.age++;
// pusheen.name = "Pusheen the Great"

// pusheen.greet("Austen");
// console.log(pusheen.age);
/*
fine, but kinda redundant
*/
// const name = "SULAMITA";

// let pusheen = {
//   name: 'Pusheen',
//   age: 7,
//   color: 'gray and tabby',
//   isHappy: true,
//   greet: function(name){
//     // console.log(`Hello ${name}, I am ${this.name} the ${this.color} cat. I am ${this.age}`);

//     console.log("Hello " + name + " I am " + this.name + " the " + this.color + " cat. I am " + this.age + ".");
//   },
//   birthYear: function(currentYear){
//     // how can we change this method??
//     return currentYear - this.age;
//   },
//   arrowMethod: (name) => {
//     // this = pusheen;
//     console.log("Hello " + name + " I am " + this.name + " the " + this.color + " cat. I am " + this.age);
//   }

// };

// pusheen.greet("Pond");
// console.log(pusheen.birthYear(2019));
// pusheen.arrowMethod("Christine");
// // pusheen.greet("Mike");

// pusheen.age++;
// pusheen.age++;
// pusheen.name = "Madam Pusheen The Fifth";
// pusheen.greet("Jeff");


// const birthYear = pusheen.birthYear(2019);
// console.log(birthYear);

/*

this keyword

*/


let pusheen = {
  name: 'Pusheen',
  age: 7,
  color: 'gray and tabby',
  isHappy: true,
  greet: function(name){
    console.log(`Hello ${name}, I am ${this.name} the ${this.color} cat.`);
  },
  birthYear: function(currentYear){
    // how can we change this method??
    return currentYear - this.age;
  },
  getThis: function(){
    // pusheen
    return this;
  }
};


// // const a = { a: 1 };
// // const b = { a: 1 };
// // console.log(a === b);
// // console.log(a == b);

// // console.log(a === a);
// let returnedObject = pusheen.getThis();
// // console.log(returnedObject.name);
// returnedObject.name = "Sir Pusheen";

// console.log(pusheen);

// console.log(returnedObject === pusheen);

const pip = {
  name: 'Pip',
  age: 5,
  color: 'Orange'
}

const mrBear = {
  name: 'Mr Bear',
  color: 'brown',
  age: 2,

  // salute: function(name){
  //   console.log(`Hello ${name}, I am ${this.name} the ${this.color} cat.`);
  // },
}

pusheen.greet("Alvin")
// pip.greet = pusheen.greet;

// // pip.greet('Sarah');

mrBear.salute = pusheen.greet;
console.log(mrBear)
mrBear.salute("Sarah");

