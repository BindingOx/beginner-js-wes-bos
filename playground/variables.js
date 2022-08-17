// "use strict";

const first = 'Mack';
// console.log(`🧾 ~ first`, first);

const age = 9000;
// console.log(`🧾 ~ age`, age);

const cool = true;
// console.log(`🧾 ~ cool`, cool);

// var and let can be updated
// first = 'moogoo';
// console.log(`🧾 ~ first`, first);
// age = 100;
// console.log(`🧾 ~ age`, age);

// for const, not 100% true that it cant be changed like in arrays and objects

// you didn't var, let, or const this

const dog = 'snickers';
console.log(`🧾 ~ dog`, dog);
// if (typeof(dog) === "string") {
//     console.log(`You're a wizard Harry`);
// }

// function ask() {
// 	if (typeof dog === 'string') {
// 		console.log(`You're a wizard Harry`);
// 	}
// }
// ask()

// const ask = () => {
// if (typeof dog === 'string') {
// 		console.log(`You're a wizard Harry`);
// 	}
// }
// ask()

//* --------------------------------- scoping -------------------------------- */

// function scoped. only available inside the parent function
// var first = 'Mack';

// block scoped {}. inside the curly brackets
// let age = 9000;
// const cool = true;

// he uses `const` by default, then `let` if it needs to change. He almost never uses `var`
