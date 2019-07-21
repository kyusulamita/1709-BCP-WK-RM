/* What if a variable is defined locally and globally? */


// let message = 'think globally';
// function logAMessage() {
//   let message = 'act locally';
//   // JS will look for message locally, first 
//   console.log(message);
// }
// logAMessage();


/* What if a variable is defined locally and globally? */
// let message = 'think globally';
// function logAMessage() {
//   let msg = 'act locally';
//   /* if it can't find it locally, JS will look at the scope outside the function, this case, the global scope */ 
//   console.log(message);
// }
// logAMessage();