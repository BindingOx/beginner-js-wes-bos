// const first = 'Mack';
// const last = 'Bonty';
// const age = 100;

// // window.setTimeout() is the same as just setTimeout() because it defaults to window

// // because these are global variables
// console.log(first); // ok
// console.log(last); // ok
// console.log(age); // ok

// // but only var is attached to the window object
// console.log(window.first); // undefined
// console.log(window.last); // undefined
// console.log(window.age); // 100 because var has access to window

// // anything in the global scope is attached to the window object except const and let variables
// function sayHi() {
//   console.log('Hi');
// }
// window.sayHi(); // works

//! bad practice to create global variables because

// const age = 100;

// function go() {
//   const hair = 'blonde';
//   console.log('🧾 => go => hair:', hair); // undefined outside of this function
// }
// go();

// function reachOut() {
//   console.log('🧾 => reachOut => age:', age); // yes, function can reach out (scope lookup) and access globals
// }
// reachOut();

// function whichAge() {
//   // const age = 200; // NOTE: bad practice to do this because if you want to access the 100 age from the function, there's no way to do that now. const myAge = 200 is better
//   const myAge = 200;
//   console.log('🧾 => whichAge => age:', age); // functions will look locally before globally
//   console.log('🧾 => whichAge => myAge:', myAge);
// }
// whichAge();

//* ------------------------------- block scope ------------------------------ */

// NOTE: Think of curly braces as gates and gates like to keep variables in
// if (1 === 1) {
//   // const cool = true; // undefined
//   // let cool = true; // undefined
//   // var cool = true; // 👍 works
// }
// console.log(cool);

//* solution
// let cool;
// if (1 === 1) {
//   cool = true; // 👍 works
// }
// console.log(cool);

//* better solution - put all inside a fucntion and declare the variable inside that
function isCoolImproved() {
  let cool;
  if (1 === 1) {
    cool = true; // 👍 works
  }
  return cool;
}
// console.log('🪓 => isCoolImproved():', isCoolImproved()); // undefined if didn't return a value

//* You cant access a variable declared inside of the if statement:
function isCool2(name) {
  if (name === 'mack') {
    const cool2 = true; // wont work with let either
    // return cool2 // NOTE: you would have to return it twice to access it
  }
  return cool2;
}
// console.log('🪓 => isCool2(name)', isCool2('mack')); // ❌
// NOTE: even though we return cool, we can't access it like above b/c its defined in the if block

//* to fix ifCool2, declare the variable outside of the if statement:

function isCool3(name) {
  let cool3;
  if (name === 'mack') {
    cool3 = true;
  }
  return cool3;
}
// console.log('🪓 => isCool3(name):', isCool3('mack'));

//* ---------------------------------- leaks ---------------------------------- */

// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

// console.log(i); // now you have a random i floating around

// //* solution: change var to let
// for (let j = 0; j < 10; j++) {
//   console.log(j);
// }

//* ------------------------- lexical/static scoping ------------------------- */

// NOTE: lookup happens where variables are defined, not where they are run

// const dog = 'snickers';

// function logDog() {
//! if you defined a local variable here, it wouldn't have reached up
//   console.log('🪓 => sunnyOrSnickers() => logDog() => dog:', dog);
// }

// function sunnyOrSnickers() {
//   const dog = 'sunny';
//   logDog();
//   // console.log("🪓 => logDog('sunny'):", logDog('sunny'));
// }

// sunnyOrSnickers(); //* snickers. logDog() doesn't care where its run and can see the local dog variable, it cares where it's defined. since inside logDog() there is no local variable, it will reach up. if there was a local variable, it would use that instead.

//* --------------------------------- ideally -------------------------------- */

const dog = 'snickers';

function logDog(dog) {
  //* the parameter behind the scenes is same as if you did const dog = whateverYouPassedAsTheArgument
  // dog = 'WTF';
  console.log(dog);
}

function snickersOrRufus() {
  const dog = 'sunny';
  logDog('Rufus'); // NOTE: passing dog here is the same as passing 'sunny'
}

// snickersOrRufus();
// NOTE: Rufus because passing an argument is the same as declaring a local variable behind the scenes

// NOTE: Would be "WTF" if you declared it.

//* ----------------------------- function scope ----------------------------- */

function sayHi(name) {
  function yell() {
    console.log(name.toUpperCase());
    // return name
  }
  yell();
}
// yell();  // not defined
sayHi('wes');
// console.log('🪓 => sayHi(name)', sayHi('wes'));//? why does this return undefined too?

/* -------------------- generally, you'll be doing this: -------------------- */

function yell2(name) {
  console.log(name.toUpperCase());
}

function sayHi2(name) {
  yell2(name);
}

yell2('Lupe');
