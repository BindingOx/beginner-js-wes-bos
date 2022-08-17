//* ---------------------------- method 1: normal ---------------------------- */
// function someFunction(firstName) {
//   return `Mr. ${firstName}`;
// }

const { time } = require('console');

//* ---------------------- method 2: anonymous function ---------------------- */

// A function without a name is an anonymous function
// normally only valid in certain use cases like used as callbacks or ify(sp?)

// function (firstName) {
//   return `Mr. ${firstName}`;
// }

//* ---------------------- method 3: function expression --------------------- */
// You store an anonymous function as a variable

const doctorize = function (firstName) {
  return `Mr. ${firstName}`;
};
// console.log('🧾 ~ doctorize(`mack`):', doctorize(`mack`)); // works as normal

/* --------------------------- example of hoisting -------------------------- */

// if you try to run a function before its declared, you get doctorize3 is not defined
// doctorize2('Hoist')
// console.log("🧾 ~ doctorize2('Hoist')", doctorize2('Hoist'));

// But for a normal function, you can call it before it's defined:
// doctorize3('Hoist')
// console.log("🧾 ~ doctorize3('Hoist')", doctorize3('Hoist'));

// const doctorize2 = function (firstName) {
//     return `Mr. ${firstName}`;
// };

// function doctorize3(firstName) {
//     return `Mr. ${firstName}`;
// };

// functions declared with a function keyword are called hoisted, meaning that JS takes all functions and hoists them (pushes them) to the top of the page

//* ----------------------------- Arrow functions ---------------------------- */

// they have 3-4 different ways to declare them. Offers shorter syntax, they don't have their own scope with the "this" keyword
// arrow fucntions are anonymous functions

function inchToCM(inches) {
  const cm = inches * 2.54;
  return cm;
}
// console.log("🧾 ~ inchToCM(6):", inchToCM(6));

// making this function shorter, return the calculation itself:
function inchToCMv2(inches) {
  return inches * 2.54;
}
// console.log("🧾 ~ inchToCMv2(6):", inchToCMv2(6));

// now convert this to an anon function:

const inchToCMv3 = function (inches) {
  return inches * 2.54;
};
// console.log("🧾 ~ inchToCMv3(6):", inchToCMv3(6));

// now convert this to an anon function:
// 1. delete the function keyword
// 2. fat arrow to right of parenthesis
// 3. implicit return means returning with having to type the keyword "return". delete the curly braces and the return keyword.
const inchToCMv4 = (inches) => inches * 2.54;

// console.log("🧾 ~ inchToCMv4(6):", inchToCMv4(6));

// 4. stylistic choice, if only one argument, you cna get rid of the parenthesis
const inchToCMv5 = (inches) => inches * 2.54;

// console.log("🧾 ~ inchToCMv5(6):", inchToCMv5(6));

/* ---------------------------- another example: ---------------------------- */

function add(a, b = 3) {
  const total = a + b;
  return total;
}
// console.log("🧾 ~ add(1):", add(1));

// converting to an arrow function

// const addv2 = (a, b = 3) => a + b;

// console.log("🧾 ~ addv2(1):", addv2(1));

/* --------------------------- returning an object -------------------------- */

// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0,
//   };
//   return baby;
// }

// console.log("🧾 ~ makeABaby('Boss', 'Baby'):", makeABaby('Boss', 'Baby'));

// converting to an arrow function:

// const makeABaby2 = (first, last) => {
//     const baby = {
//         name: `${first} ${last}`,
//         age: 0
//     }
//     return baby;
// }

// simplifying more if you want:

// to get rid of the : error b/c it thinks we are writing a function block, use parenthesis outside
//! This is clearly less readable:
// const makeABaby2 = (first, last) => ({ name: `${first} ${last}`, age: 0 }); // function that returns an object

// console.log("🧾 ~ makeABaby2('Boss', 'Baby'):", makeABaby2('Boss', 'Baby'));

//* ---------------------------------- IIFE ---------------------------------- */
// Immediately invoked function expression

// const x = function () {
//   console.log('running the anon function...');
//   return `You are awesome today`;
// };

// console.log(x());

// OR

// (function () {
//   console.log('running the anon function...');
//   return `You are awesome today`;
//   function someFunction() {}
// })();

// this used to be popular before modules and block scope to use iife's to hide variables from global scope

// if you want to pass an argument:
// (function (age) {
//   console.log('running the anon function...');
//   return `You are awesome today and age: ${age}`;
//   function someFunction() {}
// })(30);

//* --------------------------------- methods -------------------------------- */
// functions that live inside objects

/*eslint-disable*/
const wes = {
  name: 'Random Guy',
  // normal method
  sayHi: function() {
    // console.log(this); // this is equal to the object that it was called against
    return `Hey ${this.name}`;
  },
  // Short hand method
  yellHi() {
    return `HEY ${this.name.toUpperCase()}`
  },
  // Arrow function
  wisperHi1: () => {
    // return "hii" + this.name + "im a mouse" // cant use this with arrow functions
  },
  wisperHi2: () => {
    return 'hii wesss im a mouse'
  },
}

console.log("🧾 ~ sayHi()", wes.sayHi());
console.log("🧾 ~ yellHi()", wes.yellHi());
console.log("🧾 ~ wisperHi1()", wes.wisperHi1());
console.log("🧾 ~ wisperHi2()", wes.wisperHi2());

//* --------------------------- callback functions --------------------------- */

// i.e. when someone clicks on something, run this or after some time, run that

// Click Callback
const button = document.querySelector('.btn');

function handleClick() {
  console.log('Great Clicking!!');
}

// pass it a normal function
button.addEventListener('click', handleClick);

// or pass it an anon function:
// button.addEventListener('click', function() {
//   console.log('NIce Job!!!');
// });

// Timer Callback
// setTimeout(function(){
//   console.log("I'm an anon function");
// }, 1000)

setTimeout(() => {
  console.log('DONE! Time to eat!');
}, 1000);