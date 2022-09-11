//* ************************************************************************** */
//*                                   EVENTS                                   */
//* ************************************************************************** */

const btn = document.querySelector('.btn');
const coolButton = document.querySelector('.cool');

function handleClick() {
  console.log(`😍 I GOT CLICKED!`);
}

// 3 steps: go get something, listen for something, do something
btn.addEventListener('click', handleClick); //! no () or else the callback function will run on page load

//* --------------------------- removing listeners --------------------------- */

// btn.removeEventListener('click', handleClick); //* now when click, nothing happens
// anon functions cannot be removed. Use named or arrow function like hooray

const hooray = () => console.log('HOORAY!');
coolButton.addEventListener('click', hooray);

// btn.addEventListener('click', () => {
//   console.log('Im an anon!');
// });

// console.dir(btn); // somewhere in here is addeventlistener method

//* ------------------------ Listen on multiple items ------------------------ */

const buyButtons = document.querySelectorAll('button.buy'); //! usually puts all selectors at top of file
// console.log('🪓 => buyButtons', buyButtons); // nodelist
// console.dir(buyButtons) // in prototype, we see a forEach method not addeventlistener method

function buyItem() {
  console.log('You clicked a button!');
}

function attachListener(anythingWeWant) {
  anythingWeWant.addEventListener('click', buyItem);
}

// buyButtons.forEach((buyButton) => {
//   // console.log('hey, 10 times');
//   // console.log(buyButton);
//   buyButton.addEventListener('click', handleBuyButtonClick);
// });

// better than above
buyButtons.forEach(attachListener); // this function the function on each without needing a click
