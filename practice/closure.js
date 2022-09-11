function outer() {
  const outerVar = `Hey, I'm the outer var!`;

  function inner() {
    const innerVar = `Hey, I'm an inner var!`;
    console.group('outer');
    console.log('🪓 => innerVar:', innerVar); // works because we are in inner's scope
    console.log('🪓 => outerVar:', outerVar); // works b/c of scope lookup
    console.groupEnd('outer');
  }

  inner();
  // return outerVar; //optional since I'm also logging inside inner
}

// ? How to display the inner function?
// ❌ wrong:
// console.log(inner()); // doesn't work even if you return and capture
// const result = inner();
// console.log(result);

//* correct way is to run inner inside of outer
outer();

// console.log(outer()); // COMMENT: might see undefined b/c you're c.logging twice
// NOTE: with c.log, you don't have to capture

//* 👍 Better way: you don't call inner from inside outer but return the inner function

function outer2() {
  const outerVar2 = `A better outer var!`;

  // add a return here or below
  return function inner2() {
    const innerVar2 = `A better inner var!`;
    console.group('outer2');
    console.log('🪓 => innerVar:', innerVar2);
    console.log('🪓 => outerVar:', outerVar2);
    console.groupEnd('outer2');
  };
  // OR return inner2 without the ()
}

/* ------------------- returning to stick it in a variable ------------------ */

const innerFunction = outer2(); // basically reassigning outter to whatever inner is
innerFunction(); // COMMENT: in this case, the variable is a function with ()

function foo() {
  return function bar() {
    return 'Hi';
  };
}

const isFunctionToo = foo();
// console.log('🪓 typeof isFunctionToo:', typeof isFunctionToo); // function
console.group('isFunctionToo');
console.log('🪓 => isFunctionToo():', isFunctionToo());
console.groupEnd('isFunctionToo');
// NOTE: Closure is you returning a function and sticking it into a variable and at a later point in time you can access it

/* ------------------------------ more examples ----------------------------- */

function createGreeting(greeting = '') {
  const myGreet = greeting.toUpperCase();

  return function (name) {
    return `${myGreet} ${name}`; // closure, being able to access outer var from inner var
  };
}

/*
put the argument of createGreeting into a const variable
-> call the variable with a new argument for the inner function -> 
*/

console.group('sayHello');
const sayHello = createGreeting('hello'); // this makes greeting always HELLO
console.log(`🪓 => createGreeting => sayHello('Mack'):`, sayHello('Mack'));
console.groupEnd('sayHello');

console.group('sayHey');
const sayHey = createGreeting('hey');
console.log(`🪓 => createGreeting => sayHey('Mack'):`, sayHey('Mack'));
console.groupEnd('sayHey');

//* ----------------------- creating private variables ----------------------- */

// creating a counter with closure

function createGame(gameName) {
  let score = 0;
  return function win() {
    score++;
    return `Your ${gameName} score is ${score}`;
  };
}

// NOTE: you can maintain multiple games at once. They each have their own private variable score.
const hockeyGame = createGame('Hockey');
const soccerGame = createGame('Soccer');
console.group('multiple games at once');
console.log('🪓 => hockeyGame():', hockeyGame()); // 1
console.log('🪓 => hockeyGame():', hockeyGame()); // 2
console.log('🪓 => hockeyGame():', hockeyGame()); // 3
console.log('🪓 => hockeyGame():', soccerGame()); // 1
console.log('🪓 => hockeyGame():', soccerGame()); // 1
console.groupEnd('multiple games at once');

/* ------------------------- counters using closure ------------------------- */

// counter with global var

let counter = 0;
function add() {
  counter += 1;
  return counter;
}

// const snookerGame = add('Snooker');
console.group('global var counter');
console.log('🪓 => add():', add());
console.log('🪓 => add():', add());
console.log('🪓 => add():', add());
console.groupEnd('global var counter');

// counter with private var
function add2() {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
}

// OR self-invoking function:
// const add2 = (function () {
//   let counter = 0;
//   return function () {
//     counter += 1;
//     return counter;
//   };
// })();

console.group('private var counter');
const counterFunc = add2();
console.log('🪓 => counterFunc:', counterFunc());
console.log('🪓 => counterFunc:', counterFunc());
console.log('🪓 => counterFunc:', counterFunc());
console.groupEnd('private var counter');
