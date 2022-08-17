const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

// people.forEach((person, index) => {
//   console.log(person.name);
//   if (person.name === 'Wes') {
//     console.error('Dumb name');
//   }
// });

//* ----------------------------- Console Methods ---------------------------- */
// // console.error()
// // console.warn()
// console.table(people); // for lists
// console.count(doctorize('Mack')); // count how many times function ran. useful for a function thats accidentally running twice like hover elements trigger too often

// // console.group() groups together logs
// function doALotOfStuff() {
//   console.group('Doing some stuff');
//   console.log('Hey Im one');
//   console.warn('watch out!');
//   console.error('hey');
//   console.groupEnd('Doing some stuff');
// }
// doALotOfStuff();

// people.forEach((person, index) => {
//   console.group(person.name);
//   console.log(person.country);
//   console.log(person.cool);
//   console.log('DONE!');
//   console.groupEnd(`${person.name}`);
// });

//* -------------------------- Callstack/Stack trace ------------------------- */

function doctorize(name) {
  return `Dr. ${name}`;
}

function greet(name) {
  doesntExist(); // will cause an error
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

// go();

//* ---------------------------- Grabbing Elements --------------------------- */
// $, $$, $('p'), $$('p')

//* ------------------------------- Breakpoints ------------------------------ */

people.forEach((person, index) => {
  // debugger;
  console.log(person.name);
});
//* ---------------------------------- Scope --------------------------------- */

//* ---------------------------- Network Requests ---------------------------- */
// A Dad joke fetch
// use an api to get a dad joke

async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}

// const header = document.querySelector('h1');
// header.textContent = fetchDadJoke();
console.log('🧾 ~ fetchDadJoke():', fetchDadJoke());

//* --------------------------- Break On Attribute --------------------------- */

const button = document.querySelector('.bigger');
button.addEventListener('click', (e) => {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

