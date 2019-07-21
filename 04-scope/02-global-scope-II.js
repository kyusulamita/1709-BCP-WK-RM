/* EXAMPLE START ===========
// reference error, trying to use it before it's defined! [let keyword]
console.log(waitForIt);
let waitForIt = 'here I am';
console.log(waitForIt);
======== EXAMPLE END */


/* EXAMPLE START ===========

// with the var keyword you would get behavior like this \/
console.log(waitForIt);
var waitForIt = 'here I am';
console.log(waitForIt);

======== EXAMPLE END */


/* EXAMPLE START ===========
// with function you get behavior like this, functions declared with the `function` keyword are hoisted up

funFunction();

function funFunction(){
  console.log("hello");
}

funFunction();
======== EXAMPLE END */