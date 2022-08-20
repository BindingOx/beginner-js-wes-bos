// Make a div
// add a class of wrapper to it
// put it into the body
let divHTML = `
<div class="wrapper">
</div>
`;

// make an unordered list
// add three list items with the words "one, two, three" in them
// put that list into the above wrapper

divHTML = `
<div class="wrapper">
    <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
    </ul>
</div>
`;

// create an image
// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
// Append that image to the wrapper

const src = 'https://picsum.photos/';
const width = 250;
const imgClass = 'cute';
const desc = 'cute puppy';
divHTML = `
<div class="wrapper">
    <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
    </ul>
    <img class="${imgClass}" src="${src}${width}" alt="${desc}" />
</div>
`;

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
divHTML = `
<div class="wrapper">
    <div>
        <p></p>
        <p></p>
    </div>
    <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
    </ul>
    <img class="${imgClass}" src="${src}${width}" alt="${desc}" />
</div>
`;

// add a class to the second paragraph called warning
// remove the first paragraph

divHTML = `
<div class="wrapper">
    <div>
        <p class="warning"></p>
    </div>
    <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
    </ul>
    <img class="${imgClass}" src="${src}${width}" alt="${desc}" />
</div>
`;

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

function generatePlayerCard(name, age, height, fileName) {
  return `<div class="playerCard">
    <h2>${name} — ${age}</h2>
    <img src="./images/${fileName}" alt="${name}" width="150" />
    <p>They are ${height} and ${age} years old. In Dog years this person would be ${
    age * 7
  }. That would be a tall dog!
    </p>
    <div>
        <button class="delete" type="button">&times; Delete</button>
    </div>
</div>`;
}

// make a new div with a class of cards

divHTML = `
<div class="wrapper">
    <div class="cards">
    </div>
    <div>
        <p class="warning"></p>
    </div>
    <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
    </ul>
    <img class="${imgClass}" src="${src}${width}" alt="${desc}" />
</div>
`;

// Have that function make 4 cards

const card1 = generatePlayerCard('Billy Butcher', 28, "5'10", 'Billy.webp');
const card2 = generatePlayerCard('Hughie Campbell', 25, "5'11", 'Hughie.webp');
const card3 = generatePlayerCard("Mother's Milk", 26, "5'9", 'MM.webp');
const card4 = generatePlayerCard('Frenchie', 25, "5'8", 'Frenchie.webp');

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
//* `<button onclick="this.parentElement.remove()" type="button">&times; Delete</button>`

divHTML = `
<div class="cards">
    ${card1}
    ${card2}
    ${card3}
    ${card4}
</div>
<div class="wrapper">
    <div>
        <p class="warning"></p>
    </div>
    <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
    </ul>
    <img class="${imgClass}" src="${src}${width}" alt="${desc}" />
</div>
`;

//* -------------------------------------------------------------------------- */
const fragment = document.createRange().createContextualFragment(divHTML);
document.body.prepend(fragment);
//* -------------------------------------------------------------------------- */

// select all the buttons!
// NOTE: can't select buttons before fragment appended to the DOM

const buttons = document.querySelectorAll('button.delete');
// console.log('🪓 => buttons', buttons);

// make a delete function

function deleteCard() {
  this.parentElement.remove();
}
// loop over them and attach a listener

buttons.forEach((button) =>
  //   console.log('🪓 => buttons.forEach => button', button);
  button.addEventListener('click', deleteCard)
);
