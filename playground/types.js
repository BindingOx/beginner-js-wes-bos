/* eslint-disable */

const {idText} = require("typescript")

//* --------------------------------- strings -------------------------------- */
// const name = 'Mack'
// const middle = "nah"
// const last = `Bonty`

// const song = `Yeah
// baby,
// I like it
// like that!`

// // console.log(song);

// const hello = `Hello, my name is ${name} and I am ${1+100} years old`

// const html = `
// <div>
// <h2>${name}</h2>
// <p>${hello}</p>
// </div>`

// document.body.innerHTML = html
// // console.log(html);

//* --------------------------------- numbers -------------------------------- */

// const age = 10;
// // console.log(typeof age);

// const smarties = 20;
// const kids = 3;
// const eachKidGets = Math.floor(smarties / kids);
// const dadGets = smarties % kids;
// console.log(`Each kids gets: ${eachKidGets}`);
// console.log(`Dad gets: ${dadGets}`);

// console.log(0.1 + 0.2);
// // don't store money using decimals to avoid weird rounding
// // instead of 10.34, store in cents: const price = 1034. When you want to display the price, simply divide by 100? and round the cents
// const price = 1034;
// const displayPrice = price / 100;
// console.log(displayPrice);

//* --------------------------------- objects -------------------------------- */

// we use objects to group things together

const person = {
	first: 'mack',
	last: 'bonty',
	age: 100,
};

// console.log(person);

// order doesnt matter in an object, if you need order to matter then use an array

//* --------------------------------- symbols -------------------------------- */

// a way to do unique identifiers. he rarely uses them

//* --------------------------- null and undefined --------------------------- */

// // if you declare a variable and don't assign (initialize) it. It is undefined.

// let dog
// console.log(`🧾 ~ dog:`, dog);
// console.log(`🧾 ~ person.dog:`, person.dog);

// // null is a value of nothing. Has to be explicitly set to null

// // const somethingUndefined // you cant const undefined
// let somethingUndefined
// const somethingNull = null

// const cher = {
// 	first: 'cher'
// };
// console.log(`🧾 ~ cher.last:`, cher.last); //undefined because we don't know it

// const teller = {
// 	first: 'Raymond',
// 	last: 'Teller'
// }

// teller.first = 'Teller';
// console.log(`🧾 ~ teller.first`, teller.first);
// teller.last = null; // because he legal has only one name
// console.log(`🧾 ~ teller.last`, teller.last);

/* --------------------------------- booleans -------------------------------- */

let isDrawing = false // also known as a flag variable

let age = 18;
const ofAge = age > 19;
console.log(`🧾 ~ ofAge:`, ofAge);

if (ofAge) {
	console.log(`you can drink`);
} else {
	console.log(`sorry, you can't have fun`);
}

// almost always you should use triple equals

console.log(`🧾 ~ age === 18:`, age === 18);
console.log(`🧾 ~ age === 100:`, age === 100);

// triple equals checks for value and type