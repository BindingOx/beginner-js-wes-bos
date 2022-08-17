// // functions are created/defined (say what it does) -> then called

// // Function Definition
// function calculateBill() {
//     // this is the function body
//     // console.log('Running Calculate Bill!!');
//     const total = 15 * 1.15;
//     // console.log(`🧾 ~ total:`, total);
//     // NOTE: return just means I can capture it into a new variable. if you don't return, totalWithGf => NaN
//     return total;
// }

// // NOTE: variables inside functions are temporary and destroyed after function call
// // NOTE: just because we returned, doesn't mean we can access the variable now.
// // console.log(total); //is still undefined after returning
// // const myTotal = total // and this doesn't work b/c total lives only inside the function

// // Function Call
// // console.log(`🧾 ~ calculateBill`, calculateBill); // shows info in browser
// // calculateBill();

// // you can put functions inside a string literal
// console.log(`Your total is ${calculateBill()}`);

// const myTotal = calculateBill();
// const totalWithGf = myTotal * 2; // NaN without returning
// console.log(`🧾 ~ totalWithGf:`, totalWithGf); // not defined outside the function unless you return it

//* -------------------------------- version 2 ------------------------------- */
// // testing with a global variable

// let total2; //pointless?
// function calculateBillv2() {
//     console.log('Running Calculate Bill!!');
//     total2 = 15 * 1.15;
//     // console.log(`🧾 ~ total2:`, total2);
//     return total2 //total2 is undefined if this line is commented
// }

// // NOTE: returning and capturing from the function is not optional even if the variable is global.
// total2 = calculateBillv2() //it having the same name as the variable inside the function seems okay
// console.log(`🧾 ~ total2:`, total2);// undefined unless I return and capture.

//* ------------------------ parameters and arguments ------------------------ */

/* ------------------------------ using globals ----------------------------- */

// // first function rewritten

// const cost = 15
// const taxRate = 0.15

// //! not best practice to rely on global variables
// function calculateBill() {
//     total = cost * (1+taxRate);
//     // console.log(`🧾 ~ total:`, total);
//     return total
// }
// let result = calculateBill();
// console.log(`🧾 ~ result:`, result); //undefined if you don't return

/* ----------------------------- without globals ---------------------------- */

// function calculateBill(billAmount, taxRate)
// {
//     const total = billAmount * (1 + taxRate);
//     // console.log(`🧾 ~ total:`, total);
//     return total
// }

// let result = calculateBill(15, 0.15);
// console.log(`🧾 ~ result:`, result); //undefined if you don't return

/* ------------------------ passing global variables ------------------------ */
// globals and passing arguments:

// function calculateBill(billAmount, taxRate)
// {
//     const total = billAmount * (1 + taxRate);
//     // console.log(`🧾 ~ total:`, total);
//     return total
// }

// const mackBill = 15
// const mackTaxRate = 0.15
// let result = calculateBill(mackBill, mackTaxRate);
// // console.log(`🧾 ~ result using vars:`, result); //undefined if you don't return

// function sayHiTo(firstName)
// {
//     return `Hey ${firstName}`;
// }

// const greeting = sayHiTo(`Nas`); // sayHiTo() is HEy undefined b/c we've made it need an argument
// console.log(greeting);

/* --------------------------- passing expressions -------------------------- */

// const myTotal3 = calculateBill(20 + 80, 0.10)
// // console.log(`🧾 ~ myTotal3:`, myTotal3);

// const jennifer = 20
// const myTotal4 = calculateBill(jennifer + 80, 0.10)
// // console.log(`🧾 ~ myTotal4`, myTotal4);

// // NOTE: its ok to reuse parameters. They are specific to that function and never override another function.
// function doctorize(name) {
//     return `Dr. ${name}`;
// }

// function yell(name) {
//     return `HEY ${name.toUpperCase()}`;
// }

// console.log("🧾 ~ doctorize(`Kim`):", doctorize(`Kim`));
// console.log("🧾 ~ yell(`Kim`):", yell(`Kim`));

//   you can pass the output of doctorize() into yell() if you return

// yell(doctorize(`wes`))
// console.log("🧾 ~ yell(doctorize(`wes`)):", yell(doctorize(`wes`)));

/* ----------------------------- default values ----------------------------- */

// function yell(name = 'Silly Goose') {
//     return `HEY ${name.toUpperCase()}`;
// }
// // now if you forget to pass an argument, it defaults to something instead of giving an error
// console.log(yell());

// function calculateBill(billAmount, taxRate = 0.2)
// {
//     const totalWithDefault = billAmount * (1 + taxRate);
//     console.log(`🧾 ~ totalWithDefault:`, totalWithDefault);
//     return totalWithDefault
// }

// // now you can call this function with one argument
// calculateBill(100)

// // He likes doing things like defaulting to an empty string
// function yell2(name = '') {
//     return `HEY ${name.toUpperCase()}`;
// }
// // now if you forget to pass an argument, it defaults to something instead of giving an error
// console.log(yell2());

/* ---------------------------------- more ---------------------------------- */

function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  // console.log(`🧾 ~ total:`, total);
  return total;
}

const result = calculateBill(100); // has two default values
console.log(`🧾 ~ result:`, result);

// what if you want to use the default tax rate but not the default tip rate?
// pass undefined
const result2 = calculateBill(100, undefined, 0.2);
console.log('🧾 ~ result2:', result2);
