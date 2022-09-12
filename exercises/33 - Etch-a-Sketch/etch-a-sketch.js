/* pseudocode:

select the elements on the page - canvas, shake button
setup our canvas for drawing
write a draw function
write a handler for the keys
clear/shake function
listen for arrow keys
*/

/* --------- Select the elements on the page - canvas, shake button --------- */
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d'); // the place where we do our drawing
console.log('🪓 => ctx:', ctx);
const shakebutton = document.querySelector('.shake');
const MOVE_AMOUNT = 20;

/* ---------------------- Setup our canvas for drawing ---------------------- */
ctx.lineJoin = 'round'; // ensures a smooth drawing
ctx.lineCap = 'round'; // ensures a smooth drawing
ctx.lineWidth = MOVE_AMOUNT;

/* -------------------------- write a draw function ------------------------- */

// const width = canvas.width
// const height = canvas.height
const { width, height } = canvas; // destructuring

//* to randomize the starting location
// make vars from the same properties on our canvas
const x = Math.floor(Math.random() * width);
const y = Math.floor(Math.random() * height);

// start the drawing
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// sometimes your functions will have 6-7 things that need to get passed into it, in this case, use options object as parameter
function draw(options) {
    const {key:;} = options
}

/* ---------------------- write a handler for the keys ---------------------- */

function handleKey(e) {
  // since we only page about the arrow keys
  if (e.key.includes('Arrow')) {
    // console.log('🪓 => handleKey => e.code:', e.code);
    e.preventDefault(); // prevent scrolling the page using arrow keys and other keys
    // draw({ key: e.key });
  }
}

/* -------------------------- listen for arrow keys ------------------------- */

window.addEventListener('keydown', handleKey);
