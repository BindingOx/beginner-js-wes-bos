//* ----------- create the elements ( but its not on the page yet) ----------- */
const myParagraph = document.createElement('p');
// add text to it
myParagraph.innerText = 'I am a new paragraph';
// add class to it
myParagraph.classList.add('custom');
// console.log('🪓 => myParagraph', myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/200';
myImage.alt = 'Nice photo';
// console.log('🪓 => myImage', myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
// console.log('🪓 => myDiv', myDiv);

//* --------- add your created elements to the page, use appendChild --------- */
// we don't need to const body = document.querySelector('body') because we already have access to it
// this has multiple touches to the DOM:
// ❌ instead of:
// document.body.append(myDiv); // redraw the page and append div to the body
// myDiv.append(myParagraph); // redraw the page and append para to the div
// myDiv.append(myImage); // redraw the page and append img to the div so its on a new line

// ✅ do it once so browser doesn't keep repainting
myDiv.append(myParagraph); // append para to the div
myDiv.append(myImage); // append img to the div so its on a new line

document.body.append(myDiv); // redraw the page and append div to the body

//* --------------- inserting later using insertAdjacentElement -------------- */
const heading = document.createElement('h2');
// createTextNode is extra steps. could just `heading.textContent =`. Maybe useful if I need the same text repeated elsewhere
const text = document.createTextNode('Heading inserted afterBegin myDiv');
heading.append(text);

// insert the header before the start of the div
myDiv.insertAdjacentElement('afterBegin', heading);

// create a sibling element outside of the div and before it

//! ---------- Exercise: create an unordered list with 5 items in it --------- */

/*
maybe start with the middle one and add one before it etc.

<ul>
<li>One</li>
<li>Two</li>
<li>Three</li>
<li>Four</li>
<li>Five</li>
</ul>
*/

//* ❌ not using a loop - my attempt (incomplete)
// const ul = document.createElement('ul');
// let li = document.createElement('li');
// const array = ['One', 'Two', 'Three', 'Four', 'Five'];
// let i = 2; // start with Li Three

// function appendLi() {
//   if (i < array.length) {
//     console.log('🪓 => appendLi => i', i);
//     li = document.createElement('li');
//     li.innerText = array[i];
//     ul.append(li);
//     i++;
//   }
// }

// function prependLi() {
// //   i = 2;
//   if (i < array.length) {
//     li = document.createElement('li');
//     li.innerText = array[i - 1];
//     // myDiv.insertAdjacentElement('afterBegin', li);
//     ul.prepend(li);
//     i--;
//   }
//     console.log("🪓 => prependLi => i", i);
// }

// appendLi(); // Three
// appendLi(); // Four
// appendLi(); // Five
// prependLi(); // Two
// prependLi(); // ❌ Two when i want it to be One

// myDiv.append(ul);

// console.log(i);

//* --------------------------- ✅ using a for loop --------------------------- */
// const ul = document.createElement('ul');
// const array = ['One', 'Two', 'Three', 'Four', 'Five'];

// for (let index = 0; index < array.length; index++) {
//   const li = document.createElement('li');
//   li.innerText = array[index];
//   ul.append(li);
// }

// myDiv.append(ul);

//* -------------------------- performance solution? I think same as for-loop -------------------------- */

/*
modified from: https://stackoverflow.com/a/46141923/18707746

Whilst all the supplied answers work and are fine - they all suffer from the same issue - in that they append the element to the DOM with each iteration. With a small list this will not be an issue, but if you are dealing with a large number of elements that you want in your list - the constant manipulation of hte DOM will have a performance cost.

It is far better (IMO) to build a single string of the li's and then when the array is fully iterated through - pass the string to the UL using .innerHTML - in the DOM in a single action. Same result - but faster. */

// const ul = document.createElement('ul');
// const numbers = ['One', 'Two', 'Three', 'Four', 'Five'];

// numbers.forEach((number) => {
//   const li = document.createElement('li');
//   li.innerText += `${number}`;
//   ul.append(li);
// });

// myDiv.append(ul);

//* ----------------------- Wes' solution - manual way ---------------------- */
const list = document.createElement('ul');

const li3 = document.createElement('li');
li3.innerText = 'Three';
list.append(li3);

// could use append instead of insertAdjacentElement
const li4 = document.createElement('li');
li4.innerText = 'Four';
li3.insertAdjacentElement('afterend', li4);

const li5 = document.createElement('li');
li5.innerText = 'Five';
li4.insertAdjacentElement('afterend', li5);

// could use prepend
const li2 = document.createElement('li');
li2.innerText = 'Two';
li3.insertAdjacentElement('beforebegin', li2);
// list.prepend(li2);

const li1 = document.createElement('li');
li1.innerText = 'One';
li2.insertAdjacentElement('beforebegin', li1);
// list.prepend(li1);

myDiv.append(list);
