/* 

  what if it takes in a parameter?
  https://goo.gl/DejnHB
  https://goo.gl/qYWCPL

*/

// function getGreeter(name) {

//   return function() {
//     console.log('Hi', name);
//   };
// }

// let greeter = getGreeter('Rosalind');
// greeter();

// let greeter2 = getGreeter('Marie');
// greeter2();
// greeter();function getGreeter(name) {

//   return function() {
//     console.log('Hi', name);
//   };
// }

// let greeter = getGreeter('Rosalind');
// greeter();

// let greeter2 = getGreeter('Marie');
// greeter2();
// greeter();


// // function getGreeter(name){
// const getGreeter = (name) => {
//   let hellos = 0;
  
//   return () => {
//   // return function() {
//     console.log(`Hi ${name}, I have said hi ${hellos} number of times`);
//     hellos++;
//   };
// }

// let greeter = getGreeter('Rosalind');
// greeter();

// let greeter2 = getGreeter('Marie');
// greeter2();
// greeter();

// function getCustomGreeter(name) {
//   let count = 0;
//   return function() {
//     console.log('Hi', name, "call count", ++count);// count = count + 1
//   };
// }

// let greeter = getCustomGreeter('Rosalind');
// let sulamitaGreeter = getCustomGreeter("Sulamita");

// greeter();
// greeter();
// greeter()

// sulamitaGreeter()