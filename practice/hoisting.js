//* ---------------------------- Function hoisting --------------------------- */

sayHi(); // Output - Hi

function sayHi() {
  console.log('🪓 => sayHi:', 'Hi');
}

//* works

/* ----------------------------- another example ---------------------------- */

sayHi2();

function sayHi2() {
  console.log('🪓 => sayHi2:', 'Hi');
  console.log('🪓 => add2(10, 2):', add2(10, 2));
}
function add2(a, b) {
  return a + b;
}

// Output - Hi
// Output - 12

//* works

sayHi3();

function sayHi3() {
  console.log('🪓 => sayHi2:', 'Hi');
//   console.log('🪓 => add2(10, 2):', add3(10, 2)); // ❌ Output - Cannot access 'add' before initialization
}

const add3 = function (a, b) {
  return a + b;
};



//* ---------------------------- Variable hoisting --------------------------- */

console.log(age); // Output - undefined
// console.log(cool); // ❌ Output - cool is not defined
var age = 10;
