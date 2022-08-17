// when you pass data to a function when calling it 1its called an argument

Math.max(10, 12); // 10 and 12 are arguments
console.log(`🧾 ~ Math.max(10, 12):`, Math.max(10, 12));

parseFloat('3.45'); // converts a string to a number
console.log(`🧾 ~ parseFloat("3.45"):`, parseFloat('3.45'));
parseInt('3.45'); // converts a string to an integer
console.log(`🧾 ~ parseInt("3.45"):`, parseInt('3.45'));

Date.now(); // https://epoch.now.sh/ will convert to date for you
console.log(`🧾 ~ Date.now()`, Date.now());

// this is running a function called document.querySelector and passing it a value playerCard

const p = document.querySelector('p');
console.log(p);

// https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
// window.scrollTo(0, 500) // scrolls the page to an x and y coordinate

// NOTE: you can also pass an object
window.scrollTo({
  top: 500,
  left: 0,
  behavior: 'smooth',
});
