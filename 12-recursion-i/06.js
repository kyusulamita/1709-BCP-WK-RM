/* 

that started off so promisingly!

because our function was instructed to call itself every time, the function ends up calling itself forever until our computer runs out of memory

let's write in a stop condition so the function eventually stops calling itself 


https://goo.gl/EpNPCt

*/


function countdown(num) {
  // here's our stop condition, commonly known as the 'base case'
  if (num < 1) {
    console.log('done!');
  }
  // here's our 'recursive case'
  else {
    console.log(num);
    countdown(num - 1);
  }
}

countdown(3);


/* two takeaways from countdown: */

/* 1. you need to define a base case! */
/* 2. your recursive case must change the input to the function so that you will eventually trigger the base case! */

/*

really quickly lets compare the iterative and recursive version:

iterative:
function countdown(num) {

  for (let i = num; i >= 1; i--) {
    console.log(i);
  }
  console.log('done!');
}


recursive:
function countdown(num) {
  // base condition
  if (num < 1) {
    console.log('done!');
  }
  // here's our 'recursive case'
  else {
    console.log(num);
    countdown(num - 1);
  }
}

OR
function countdown(num) {
  // recursive case
  if (num >= 1){
    console.log(num);
    countdown(num - 1);
  } else {
    // base case
    console.log('done!');
  }
}



/*