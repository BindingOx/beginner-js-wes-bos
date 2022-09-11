//* ************************************************************************** */
//*                   TARGETS, BUBBLING, PROPAGATION, CAPTURE                  */
//* ************************************************************************** */

const btn = document.querySelector('.btn');
const coolBtn = document.querySelector('.cool');
const buyBtns = document.querySelectorAll('button.buy');

function handleBuyBtnClick(e) {
  //* --------------  How do you get info about the specific btn clicked? -------------- */
  // this info is hidden away in the event object. To access, we pass a parameter to this function
  // doesn't matter what we call it, it is the first argument of out callback
  console.log(`You clicked on a button!`);
  // console.log("🪓 => e", e); //we're interested in target and currentTarget
  // console.log('🪓 => e.target:', e.target); // now shows which button we clicked on
  // console.log("🪓 => this", this); // seems the same as e.target

  // now that we've added our own custom data:
  // console.log('🪓 => e.target.dataset.price:', e.target.dataset.price); // typeof shows this is still just a string
  // NOTE: parseFloat() keeps decimals, parseInt() doesn't
  console.log(
    '🪓 => parseFloat(e.target.dataset.price):',
    parseFloat(e.target.dataset.price)
  ); // now we get a number

  // can do
  // const btn = e.target
  // console.log("🪓 => handleBuyBtnClick => btn.textContent:", btn.textContent);

  // looking at currentTarget, seems the same as target. difference is when you have nested elements inside youself
  // console.log('🪓 => handleBuyBtnClick => e.currentTarget:', e.currentTarget);
  // console.log('🪓 => handleBuyBtnClick => e.target:', e.target);
  // console.log(
  //   '🪓 => e.target === e.currentTarget?',
  //   e.target === e.currentTarget
  // );

  // but if you click on the bolded number itself, you dont get these results
  // 🪓 => handleBuyBtnClick => e.currentTarget: // <button data-price=​"100" class=​"buy">​…​</button>​ // NOTE: in most cases, you probably want this
  // 🪓 => handleBuyBtnClick => e.target: // <strong>​1​</strong> ​// NOTE: e.target is the thing that actually got clicked
  // 🪓 => e.target === e.currentTarget? false

  e.stopPropagation();
  console.log("stopPropagation enabled so you don't also click on the window");
}

buyBtns.forEach((buyBtn) => {
  buyBtn.addEventListener('click', handleBuyBtnClick);
});

//* ------------------------------- Propagation ------------------------------ */

// you can click on multiple things at the same time
// when you click on the button, both event listeners fire off

window.addEventListener(
  'click',
  (event) => {
    console.log('YOU CLICKED THE WINDOW');
    // console.log(event.target); // this shows you what your're clicking on
    console.log('🪓 => event.target:', event.target);
    console.log('🪓 => event.type:', event.type);

    // NOTE: to stop propagation and only click on the window and the button
    // event.stopPropagation();

    // console.log(event.bubbles);
    console.log('🪓 => event.bubbles:', event.bubbles);
  }
  // NOTE: capture is sort of the opposite of propagation
  // ,
  // { capture: true } // when you click on button, it will click on on window first (top->down now)
);

//* -------------------------------------------------------------------------- */

const photoEl = document.querySelector('.photo');

// photoEl.addEventListener('mouseenter', function (e) {
//   console.log('🪓 => e.currentTarget', e.currentTarget); //output: <img class="photo" src="https://picsum.photos/200" alt="Nice">
//   console.log('🪓 => this:', this); //output: <img class="photo" src="https://picsum.photos/200" alt="Nice">
// });

// NOTE: but if you change to an arrow function, the this keyword is no longer scoped
photoEl.addEventListener('mouseenter', (e) => {
  console.log('🪓 => e.currentTarget', e.currentTarget); // output: <img class="photo" src="https://picsum.photos/200" alt="Nice">
  console.log('🪓 => this:', this); //* output: Window {window: Window, self: Window, document: document, name: '', location: Location, …}
});

// photoEl.addEventListener('mousemove', function (e) => {
//   console.log(e.currentTarget);
//   // console.count(e.currentTarget); // will tell you how often something has fired
// console.log(this);
// });
