// this is faster the creating elements and moving elements into the right positions
const div = document.querySelector('.item');
const width = 300;
const src = `https://picsum.photos/${width}`;
const desc = 'Cute';
const myHTML = `
<div class="wrapper">
    <h3>${desc} picture</h3>
    <img src="${src}" alt="${desc}" />
    <p>This is a picture</p>
</div>
`;

//! WARNING: these are not elements. if you console log myHTML, it is just a string.
// // This means we can't call methods on it like .classlist.add('custom')
// div.classList;
// div.innerHTML = myHTML;
// // console.log("🪓 => myHTML", typeof myHTML); // string
// // myHTML.classList.add('special'); // Uncaught TypeError: can't access property "add", myHTML.classList is undefined
// // console.log("🪓 => myHTML.classList", myHTML.classList); //  undefined

// // now you can manipulate it 👍
// const image = document.querySelector('.wrapper img');
// // console.log('🪓 =>  image', image);

// // now you can see classes on it
// image.classList.add('round');
// // console.log('🪓 => image.classList', image.classList); //? idk why its not undefined now
// // console.log('🪓 => myHTML', typeof myHTML); // still type string

//* ------------------------------- turn a string into a DOM element ------------------------------ */
// use createRange() This code creates something called a range - a collection of elements or part of HTML that we can then work with.

const myFragment = document.createRange().createContextualFragment(myHTML);
console.log('🪓 => myFragment', myFragment);

console.log(myFragment.querySelector('img'));

// Now append to the body:

document.body.append(myFragment);

//* ------------------------ security and sanitization ----------------------- */

// if a user imputs html into a form field, it can be rendered on the page like:

// const desc = `Cute Pup <h1>I hacked</h1> <img onload="alert('HACKED')" src="https://picsum.photos/50"/>`;

// XSS is when a user starts introducting script tags that the browser runs and you could do anything you want like drain someone's bank account.